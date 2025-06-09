import {  Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {  IonInput } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Printer,PrintOptions } from '@ionic-native/printer/ngx/index';


import {  IonicSelectableComponent } from '@ionic-selectable/angular';
import { Socket,SocketIoConfig  } from 'ngx-socket-io';

// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';

// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';

// const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// const EXCEL_EXTENSION = '.xlsx';


import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

// import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-moulding',
  templateUrl: './moulding.page.html',
  styleUrls: ['./moulding.page.scss'],
})
export class MouldingPage implements OnInit {

  datapass: any={};
  datapassTemp:any[]=[];
  dataUrl=localStorage.getItem('url');
  registerForm: FormGroup;
  brandImage="";
  datalist;
  showprinter=false;
  dropdownObject="";
  selected:any = [];
  socketIp='';
  showMenu=true;
  category=[];

  purchase=false;
  production=false;
  despatch=false;
  mixing=false;
  deflashing=false;
  inspection=false;
  calendering=false;
  final=false;
  currentReport="";
  pageUrl="";
  scanData: any | null = null;
codeReader = new BrowserMultiFormatReader();
controls: IScannerControls | null = null;
isModalOpen = false;

  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
  constructor(public inappbrowser:InAppBrowser,private printer: Printer,private http: HttpClient,public loadingController: LoadingController,private screenOrientation: ScreenOrientation,public toastController: ToastController,private router: Router,
    private formBuilder: FormBuilder,private socket: Socket,private file: File, private transfer: FileTransfer) {

    if(localStorage.getItem('userid') == null && localStorage.getItem('password') == null)
    {
      this.router.navigate(["home"]);
    }
    this.checkStorage();
    this.socketIp=localStorage.getItem("IPAddr");
  }

  @ViewChild('inputId', {  static: false })  inputElement: IonInput;

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    this.scan();
    this.socket.connect();
    this.registerForm = this.formBuilder.group({
      actlift: ['', Validators.required],
      pin: ['', Validators.required]
  });
  }  
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  async scan() {
  const codeReader = new BrowserMultiFormatReader();
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    spinner: 'dots'
  });
  await loading.present();

  try {
    const videoInputDevices = await BrowserMultiFormatReader.listVideoInputDevices();

    if (videoInputDevices.length === 0) {
      await loading.dismiss();
      this.toastfunction('No camera device found on this device.', 'danger');
      return;
    }

    // Detect device type
     const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    let selectedDevice;

    if (isMobile) {
      selectedDevice = videoInputDevices.find(device =>
        device.label.toLowerCase().includes('back') ||
        device.label.toLowerCase().includes('environment')
      );
    } else {
      selectedDevice = videoInputDevices.find(device =>
        device.label.toLowerCase().includes('front') ||
        device.label.toLowerCase().includes('user')
      );
    }

    if (!selectedDevice) {
      selectedDevice = videoInputDevices[0];
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: selectedDevice.deviceId } });
      stream.getTracks().forEach(track => track.stop());
    } catch (err) {
      await loading.dismiss();
      this.toastfunction('Camera permission is required to scan.', 'danger');
      return;
    }

    const headers = {
      'auth-id': localStorage.getItem('authid')!,
      'client-id': localStorage.getItem('clientid')!,
      'user': localStorage.getItem('userid')!,
      'password': localStorage.getItem('password')!
    };

    this.http.get<any>(this.dataUrl + "/api/reportlinks", { headers }).subscribe({
      next: async data => {
        this.datapass = data;
        this.datapassTemp = data;
        loading.dismiss();

        this.datapass.message.forEach(x => {
          if (x.group === "purchase") this.purchase = true;
          else if (x.group === "production") this.production = true;
          else if (x.group === "despatch") this.despatch = true;
          else if (x.group === "mixing") this.mixing = true;
          else if (x.group === "deflashing") this.deflashing = true;
          else if (x.group === "inspection") this.inspection = true;
          else if (x.group === "calendering") this.calendering = true;
          else if (x.group === "final") this.final = true;
        });
      },
      error: errordata => {
        loading.dismiss();
        if (errordata.error?.message) {
          this.toastfunction(errordata.error.message, "danger");
        } else {
          this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
        }
      }
    });
  } catch (err) {
    await loading.dismiss();
    this.toastfunction("Error while checking camera devices.", "danger");
  }
}

  

  print() { this.printer.print(); }

  onClickMe(obj) {
    this.router.navigate([obj]);
  }

  getReport(page){
      let arr=this.datapass;
      arr=this.datapass.message.filter((x)=>{
        return x.group == page;
      })
     this.datapassTemp=arr;
     arr.length > 0 ?  this.showMenu=false : this.toastfunction("No Reports Found","danger");
  }

  checkStorage() {
    const storage = parseInt(localStorage.getItem("your-data-key"));
    let date = new Date();
    const currentDate = date.setDate(date.getDate()); // Current date in milliseconds
    if (currentDate >= storage) {
      localStorage.removeItem("your-data-key");
      localStorage.removeItem("userid");
      localStorage.removeItem("password");
      this.router.navigate(["home"]);
    }
  }

  ReportChanged(event: any)
  {
    this.dropdownObject=event == "Select" ? "": event;
    let url=event.link;
    url=url.replace("&amp;", "&");
    this.datalist=event.link;
    event.print == "1" ? this.showprinter = true : this.showprinter =false;
    event.credentials == "1" ?
    this.datalist=url+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.datalist=url;
    this.pageUrl=event.link;
    console.log(this.datalist);
    this.currentReport=event.name;
  }


  
  async castData(type: 'open' | 'close') {
    if (type === 'open') {
      this.isModalOpen = true;
  
      setTimeout(async () => { 
        try {
         if (!this.codeReader) {
          this.codeReader = new BrowserMultiFormatReader();
        }

        const devices = await BrowserMultiFormatReader.listVideoInputDevices();
  
          if (devices.length === 0) {
            this.toastfunction('No camera device found.', 'danger');
            return;
          }

          const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

          let selectedDevice;

          if (isMobile) {
            selectedDevice = devices.find(device =>
              device.label.toLowerCase().includes('back') ||
              device.label.toLowerCase().includes('environment')
            );
          } else {
            selectedDevice = devices.find(device =>
              device.label.toLowerCase().includes('front') ||
              device.label.toLowerCase().includes('user')
            );
          }

          if (!selectedDevice) {
            selectedDevice = devices[0];
          }
          console.log({selectedDevice});
          
  
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: selectedDevice.deviceId } });
            stream.getTracks().forEach(track => track.stop());
          } catch (err) {
            this.toastfunction('Camera permission is required.', 'danger');
            return;
          }
  
          const selectedDeviceId = selectedDevice.deviceId;
          this.codeReader.decodeFromVideoDevice(selectedDeviceId, 'video-preview', (result, error, controls) => {
            if (result) {
              this.scanData = result;
              this.controls = controls;
              controls.stop();
  
              const room = result.getText();
              if (room) {
                this.socket.emit('subscribe', JSON.stringify({
                  userName: this.socketIp,
                  roomName: room
                }));
                this.socket.emit('newMessage', JSON.stringify({
                  userName: this.socketIp,
                  messageContent: this.datalist,
                  roomName: room
                }));
              }
  
              this.isModalOpen = false;
            }
          });
  
        } catch (error) {
          this.toastfunction('Error accessing the camera.', 'danger');
        }
      });
    }
  
    if (type === 'close') {
      if (this.scanData?.getText()) {
        const room = this.scanData.getText();
        this.socket.emit('subscribe', JSON.stringify({
          userName: this.socketIp,
          roomName: room
        }));
        this.socket.emit('newMessage', JSON.stringify({
          userName: this.socketIp,
          messageContent: '',
          roomName: room
        }));
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

  navBack()
  {
    this.router.navigate(['home']);
  }

  async toastfunction(msg,colour)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      animated:true,
      color:colour
    });

    toast.present();
  }

  async exportToExcel() {

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        spinner:'dots'
      });
      loading.present();
      let url=this.pageUrl.split("?");
      let tempurl=url[0]+"csv=true?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password');
      // this.pageUrl=tempurl;

      // await Browser.open({ url: tempurl });
      window.open(tempurl)
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

}
