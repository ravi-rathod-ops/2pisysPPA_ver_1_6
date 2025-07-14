import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import {
  InAppBrowser,
  InAppBrowserOptions,
} from '@ionic-native/in-app-browser/ngx';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx/index';

import { IonicSelectableComponent } from '@ionic-selectable/angular';
import { Socket, SocketIoConfig } from 'ngx-socket-io';

// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';

// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';

// const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// const EXCEL_EXTENSION = '.xlsx';

import { File } from '@ionic-native/file/ngx';
import {
  FileTransfer,
  FileTransferObject,
} from '@ionic-native/file-transfer/ngx';

// import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-moulding',
  templateUrl: './moulding.page.html',
  styleUrls: ['./moulding.page.scss'],
})
export class MouldingPage implements OnInit, OnDestroy, AfterViewInit {
  datapass: any = {};
  datapassTemp: any[] = [];
  dataUrl = localStorage.getItem('url');
  registerForm: FormGroup;
  brandImage = '';
  datalist;
  showprinter = false;
  dropdownObject = '';
  selected: any = [];
  socketIp = '';
  showMenu = true;
  category = [];

  purchase = false;
  production = false;
  despatch = false;
  mixing = false;
  deflashing = false;
  inspection = false;
  calendering = false;
  final = false;
  currentReport = '';
  pageUrl = '';
  scanData: any | null = null;
  codeReader = new BrowserMultiFormatReader();
  controls: IScannerControls | null = null;
  isModalOpen = false;
  isback = false;
  handleRoute = '';
  columnFieldMap: { [header: string]: string } = {};
  reportData: any;
  sumValues: { [key: string]: number } = {};
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  isAutoScroll = true;
  scrollInterval: any;

  filterInputs: { [key: string]: string } = {};
  activeFilters: { [key: string]: boolean } = {};
  filteredData: any[] = [];
  filteredCount: number = 0;
  filteredSumMap: { [key: string]: number } = {};
  activeFilterCol: string | null = null;
  isFiltering: boolean = false;

  totalRow: any = {};

  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
  @ViewChild('scrollArea') scrollArea!: ElementRef;
  constructor(
    public inappbrowser: InAppBrowser,
    private printer: Printer,
    private http: HttpClient,
    public loadingController: LoadingController,
    private screenOrientation: ScreenOrientation,
    public toastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder,
    private socket: Socket,
    private file: File,
    private transfer: FileTransfer
  ) {
    if (
      localStorage.getItem('userid') == null &&
      localStorage.getItem('password') == null
    ) {
      this.router.navigate(['home']);
    }
    this.checkStorage();
    this.socketIp = localStorage.getItem('IPAddr');
  }

  @ViewChild('inputId', { static: false }) inputElement: IonInput;
  isMobile: boolean = false;

  ngOnInit() {
    this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    this.brandImage = localStorage.getItem('brandImage');
    this.scan();
    this.socket.connect();
    this.registerForm = this.formBuilder.group({
      actlift: ['', Validators.required],
      pin: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    if (this.isAutoScroll) {
      this.startScroll();
    }
  }

  startScroll() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }

    this.scrollInterval = setInterval(() => {
      const el = this.scrollArea?.nativeElement;
      if (!el) return;

      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        el.scrollTop = 0;
      } else {
        el.scrollTop += 1;
      }
    }, 50);
  }

  stopScroll() {
    clearInterval(this.scrollInterval);
  }

  toggleScroll() {
    this.isAutoScroll = !this.isAutoScroll;
    if (this.isAutoScroll) {
      this.startScroll();
    } else {
      this.stopScroll();
    }
  }

  ngOnDestroy() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  async scan() {
    const codeReader = new BrowserMultiFormatReader();
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'dots',
    });
    await loading.present();

    try {
      const videoInputDevices =
        await BrowserMultiFormatReader.listVideoInputDevices();

      if (videoInputDevices.length === 0) {
        await loading.dismiss();
        this.toastfunction('No camera device found on this device.', 'danger');
        return;
      }

      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      let selectedDevice;

      if (isMobile) {
        selectedDevice = videoInputDevices.find(
          (device) =>
            device.label.toLowerCase().includes('back') ||
            device.label.toLowerCase().includes('environment')
        );
      } else {
        selectedDevice = videoInputDevices.find(
          (device) =>
            device.label.toLowerCase().includes('front') ||
            device.label.toLowerCase().includes('user')
        );
      }

      if (!selectedDevice) {
        selectedDevice = videoInputDevices[0];
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: selectedDevice.deviceId },
        });
        stream.getTracks().forEach((track) => track.stop());
      } catch (err) {
        await loading.dismiss();
        this.toastfunction('Camera permission is required to scan.', 'danger');
        return;
      }

      const headers = {
        'auth-id': localStorage.getItem('authid')!,
        'client-id': localStorage.getItem('clientid')!,
        user: localStorage.getItem('userid')!,
        password: localStorage.getItem('password')!,
      };

      this.http
        .get<any>(this.dataUrl + '/api/reportlinks', { headers })
        .subscribe({
          next: async (data) => {
            this.datapass = data;
            this.datapassTemp = data;
            loading.dismiss();

            this.datapass.message.forEach((x) => {
              if (x.group === 'purchase') this.purchase = true;
              else if (x.group === 'production') this.production = true;
              else if (x.group === 'despatch') this.despatch = true;
              else if (x.group === 'mixing') this.mixing = true;
              else if (x.group === 'deflashing') this.deflashing = true;
              else if (x.group === 'inspection') this.inspection = true;
              else if (x.group === 'calendering') this.calendering = true;
              else if (x.group === 'final') this.final = true;
            });
          },
          error: (errordata) => {
            loading.dismiss();
            if (errordata.error?.message) {
              this.toastfunction(errordata.error.message, 'danger');
            } else {
              this.toastfunction(
                'Invalid Company Url, Please Check in Home page',
                'danger'
              );
            }
          },
        });
    } catch (err) {
      await loading.dismiss();
      this.toastfunction('Error while checking camera devices.', 'danger');
    }
  }

  print() {
    this.printer.print();
  }

  onClickMe(obj) {
    this.router.navigate([obj]);
  }

  getReport(page) {
    let arr = this.datapass;
    this.handleRoute = page;
    arr = this.datapass.message.filter((x) => {
      return x.group == page;
    });

    this.datapassTemp = arr;
    arr.length > 0
      ? (this.showMenu = false)
      : this.toastfunction('No Reports Found', 'danger');
  }

  back() {
    if (this.handleRoute != '') {
      this.isback = false;
      this.dropdownObject = '';
      this.showMenu = true;
      this.datapassTemp = [];
      this.handleRoute = '';
      this.reportData = {};
      this.router.navigate(['Moulding']);
    } else {
      this.router.navigate(['Widgets']);
    }
  }

  checkStorage() {
    const storage = parseInt(localStorage.getItem('your-data-key'));
    let date = new Date();
    const currentDate = date.setDate(date.getDate()); // Current date in milliseconds
    if (currentDate >= storage) {
      localStorage.removeItem('your-data-key');
      localStorage.removeItem('userid');
      localStorage.removeItem('password');
      this.router.navigate(['home']);
    }
  }

  ReportChanged(event: any) {
    this.dropdownObject = event == 'Select' ? '' : event;
    this.isback = true;
    let url = event.link;
    url = url.replace('&amp;', '&');
    this.datalist = event.link;
    event.print == '1' ? (this.showprinter = true) : (this.showprinter = false);
    event.credentials == '1'
      ? (this.datalist =
          url +
          '?user=' +
          localStorage.getItem('userid') +
          '&pass=' +
          localStorage.getItem('password'))
      : (this.datalist = url);
    this.pageUrl = event.link;
    this.filterInputs = {};
    this.filteredData = [];
    this.filteredSumMap = {};
    this.filteredCount = 0;
    this.isFiltering = false;
    this.activeFilters = {};
    this.activeFilterCol = null;
    console.log(this.datalist);
    this.currentReport = event.name;
    this.getReportData(event.name);
  }

  isOldData = false;

  async getReportData(reportName: string) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'dots',
    });
    await loading.present();

    const headers = {
      'auth-id': localStorage.getItem('authid'),
      'client-id': localStorage.getItem('clientid'),
      user: localStorage.getItem('userid'),
      password: localStorage.getItem('password'),
    };

    this.http
      .get<any>(`${this.dataUrl}/api/scrollreport/${reportName}`, { headers })
      .subscribe({
        next: async (res) => {
          console.log({ res });

          loading.dismiss();
          if (res.status === 'success') {
            this.isOldData = false;
            const message = res.message;
            console.log({ message });
            const originalHeaders = message.colheaders;
            const sumcols = message.sumcols;
            const sumMap: { [key: string]: number } = {};

            const colheaders = ['S.No.', ...originalHeaders];

            const tableData = message.data.map((row: any, index: number) => {
              const values = Object.values(row);
              const keys = Object.keys(row);
              const limitedRow: any = {};

              limitedRow['S.No.'] = (index + 1).toString();

              for (
                let i = 0;
                i < originalHeaders.length && i < keys.length;
                i++
              ) {
                let val: any = values[i];
                const colName = originalHeaders[i];

                if (
                  typeof val === 'string' &&
                  val.includes('.') &&
                  !val.includes('-')
                ) {
                  val = val.split('.')[0];
                }

                if (sumcols.includes(colName)) {
                  const num = parseFloat(val);
                  const intPart = isNaN(num) ? 0 : parseInt(val);
                  sumMap[colName] = (sumMap[colName] || 0) + intPart;
                  val = intPart.toString();
                }

                limitedRow[colName] = val ?? '';
              }

              return limitedRow;
            });

            const totalRow: any = {};
            colheaders.forEach((col) => {
              if (col === 'S.No.') {
                totalRow[col] = '';
              } else if (sumMap[col] !== undefined) {
                totalRow[col] = `Total: ${sumMap[col]}`;
              } else {
                totalRow[col] = '';
              }
            });

            tableData.push(totalRow);

            this.reportData = {
              colheaders,
              data: tableData,
              sumcols,
            };
          }
        },
        error: (err) => {
          console.log('into error');
          loading.dismiss();
          this.isOldData = true;
          // this.toastfunction(
          //   err.error.message || 'Invalid Company URL',
          //   'danger'
          // );
        },
      });
  }

  async castData(type: 'open' | 'close') {
    if (!this.isMobile) {
      this.toastfunction(
        'Camera is available only on mobile devices.',
        'warning'
      );
      return;
    }
    if (type === 'open') {
      this.isModalOpen = true;

      setTimeout(async () => {
        try {
          if (!this.codeReader) {
            this.codeReader = new BrowserMultiFormatReader();
          }

          const devices =
            await BrowserMultiFormatReader.listVideoInputDevices();

          if (devices.length === 0) {
            this.toastfunction('No camera device found.', 'danger');
            return;
          }

          const isMobile = /Android|iPhone|iPad|iPod/i.test(
            navigator.userAgent
          );

          let selectedDevice;

          if (isMobile) {
            selectedDevice = devices.find(
              (device) =>
                device.label.toLowerCase().includes('back') ||
                device.label.toLowerCase().includes('environment')
            );
          } else {
            selectedDevice = devices.find(
              (device) =>
                device.label.toLowerCase().includes('front') ||
                device.label.toLowerCase().includes('user')
            );
          }

          if (!selectedDevice) {
            selectedDevice = devices[0];
          }
          console.log({ selectedDevice });

          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: { deviceId: selectedDevice.deviceId },
            });
            stream.getTracks().forEach((track) => track.stop());
          } catch (err) {
            this.toastfunction('Camera permission is required.', 'danger');
            return;
          }

          const selectedDeviceId = selectedDevice.deviceId;
          this.codeReader.decodeFromVideoDevice(
            selectedDeviceId,
            'video-preview',
            (result, error, controls) => {
              if (result) {
                this.scanData = result;
                this.controls = controls;
                controls.stop();

                const room = result.getText();
                if (room) {
                  this.socket.emit(
                    'subscribe',
                    JSON.stringify({
                      userName: this.socketIp,
                      roomName: room,
                    })
                  );
                  this.socket.emit(
                    'newMessage',
                    JSON.stringify({
                      userName: this.socketIp,
                      messageContent: this.datalist,
                      roomName: room,
                    })
                  );
                }

                this.isModalOpen = false;
              }
            }
          );
        } catch (error) {
          this.toastfunction('Error accessing the camera.', 'danger');
        }
      });
    }

    if (type === 'close') {
      if (this.scanData?.getText()) {
        const room = this.scanData.getText();
        this.socket.emit(
          'subscribe',
          JSON.stringify({
            userName: this.socketIp,
            roomName: room,
          })
        );
        this.socket.emit(
          'newMessage',
          JSON.stringify({
            userName: this.socketIp,
            messageContent: '',
            roomName: room,
          })
        );
      }

      if (this.controls) {
        this.controls.stop();
        this.controls = null;
      }

      this.scanData = null;
      this.isModalOpen = false;
    }
  }

  closeModal() {
    this.castData('close');
  }

  // async castData(type: 'open' | 'close') {
  //   if (type === 'open') {
  //     const modal = await this.modalCtrl.create({
  //       component: QrScannerModalComponent,
  //     });

  //     modal.onDidDismiss().then((res) => {
  //       const room = res.data;
  //       if (room) {
  //         this.scanData = { getText: () => room }; // simulate scanData object

  //         this.socket.emit('subscribe', JSON.stringify({
  //           userName: this.socketIp,
  //           roomName: room
  //         }));
  //         this.socket.emit('newMessage', JSON.stringify({
  //           userName: this.socketIp,
  //           messageContent: this.datalist,
  //           roomName: room
  //         }));
  //       }
  //     });

  //     await modal.present();
  //   }

  //   if (type === 'close') {
  //     if (this.scanData?.getText()) {
  //       const room = this.scanData.getText();
  //       this.socket.emit('subscribe', JSON.stringify({
  //         userName: this.socketIp,
  //         roomName: room
  //       }));
  //       this.socket.emit('newMessage', JSON.stringify({
  //         userName: this.socketIp,
  //         messageContent: '',
  //         roomName: room
  //       }));
  //     }
  //     this.scanData = null;
  //   }
  // }

  navBack() {
    this.router.navigate(['home']);
  }

  async toastfunction(msg, colour) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      animated: true,
      color: colour,
    });

    toast.present();
  }

  async exportToExcel() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'dots',
    });
    loading.present();
    let url = this.pageUrl.split('?');
    let tempurl =
      url[0] +
      'csv=true?user=' +
      localStorage.getItem('userid') +
      '&pass=' +
      localStorage.getItem('password');
    // this.pageUrl=tempurl;

    // await Browser.open({ url: tempurl });
    window.open(tempurl);
    loading.dismiss();

    // const fileTransfer: FileTransferObject = this.transfer.create();
    // this.file.createDir(this.file.externalRootDirectory, 'Download', true)
    // .then((resp) => {
    //   let path = resp.toURL();
    //   fileTransfer.download(tempurl, path + (this.currentReport+new Date().getMilliseconds()).split(/\s/).join('')+'.csv').then((entry) => {
    //     console.log('download complete: ' + entry.toURL());
    //     loading.dismiss();
    //     this.toastfunction("File Saved Successfully!!!","success");
    //   }, (error) => {
    //     console.log(error)
    //     loading.dismiss();
    //   });
    // }

    // );
  }

  sortByColumn(col: string) {
    if (this.sortColumn === col) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = col;
      this.sortDirection = 'asc';
    }

    const direction = this.sortDirection === 'asc' ? 1 : -1;

    const dataToSort = this.isFiltering
      ? [...this.filteredData] 
      : [...this.reportData.data.slice(0, this.reportData.data.length - 1)];

    dataToSort.sort((a, b) => {
      const aVal = a[col];
      const bVal = b[col];

      if (!isNaN(aVal) && !isNaN(bVal)) {
        return (parseFloat(aVal) - parseFloat(bVal)) * direction;
      }

      return (aVal > bVal ? 1 : aVal < bVal ? -1 : 0) * direction;
    });

    if (this.isFiltering) {
      this.filteredData = dataToSort;
    } else {
      this.reportData.data = [
        ...dataToSort,
        this.reportData.data[this.reportData.data.length - 1],
      ]; 
    }
  }

  toggleFilterInput(col: string) {
    this.activeFilters[col] = !this.activeFilters[col];
    this.activeFilterCol = this.activeFilterCol === col ? null : col;
  }

  applyFilters() {
    if (!this.reportData || !this.reportData.data) return;

    const originalData = this.reportData.data.slice(0, -1);
    const filters = this.filterInputs;

    this.isFiltering = Object.values(filters).some((val) => val?.trim());

    if (!this.isFiltering) {
      this.filteredData = [];
      this.filteredCount = 0;
      this.filteredSumMap = {};
      return;
    }

    this.filteredData = originalData.filter((row) => {
      return Object.keys(filters).every((col) => {
        const filterVal = filters[col];
        if (!filterVal?.trim()) return true;

        const cellVal = row[col];
        const parsedVal = parseFloat(cellVal);

        // Arithmetic match
        const match = filterVal.match(/^([<>]=?|=)\s*(\d+(\.\d+)?)$/);
        if (match && !isNaN(parsedVal)) {
          const operator = match[1];
          const filterNumber = parseFloat(match[2]);
          switch (operator) {
            case '>':
              return parsedVal > filterNumber;
            case '<':
              return parsedVal < filterNumber;
            case '>=':
              return parsedVal >= filterNumber;
            case '<=':
              return parsedVal <= filterNumber;
            case '=':
              return parsedVal === filterNumber;
          }
          return true;
        }

        return cellVal
          ?.toString()
          .toLowerCase()
          .includes(filterVal.toLowerCase());
      });
    });

    this.filteredCount = this.filteredData.length;

    const sumMap: { [key: string]: number } = {};
    const sumcols = this.reportData.sumcols || [];
    console.log(this.filteredData);

    this.filteredData.forEach((row) => {
      sumcols.forEach((col) => {
        const num = parseFloat(row[col]);
        if (!isNaN(num)) {
          sumMap[col] = (sumMap[col] || 0) + num;
        }
      });
    });

    this.filteredSumMap = sumMap;
  }

  getTotalValue(col: string): string {
    if (this.isFiltering) {
      if (col === 'S.No.') return '';

      const sumcols = this.reportData.sumcols || [];
      if (sumcols.includes(col)) {
        const val = this.filteredSumMap[col] ?? 0;
        return `Total: ${val}`;
      }

      return '';
    } else {
      const totalRow = this.reportData.data[this.reportData.data.length - 1];
      return totalRow[col] || '';
    }
  }
}
