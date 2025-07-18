import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { BrowserMultiFormatReader, BrowserCodeReader } from '@zxing/library';

@Component({
  selector: 'app-rmqualitycheck',
  templateUrl: './rmqualitycheck.page.html',
  styleUrls: ['./rmqualitycheck.page.scss'],
})
export class RmqualitycheckPage implements OnInit {
  brandImage = '';
  dataUrl = localStorage.getItem('url');
  datapass: any = {};
  rmArray = [];
  rmArray2 = [];
  rmArrayTemp = [];
  rmDetails = [];
  showEntryCard = false;
  registerForm: FormGroup;
  loc: any;
  purArray: any;
  dataArray: any;
  tcIsAvaiable = 1;
  tcfile = null;
  invfile = null;
  isApproved = '1';
  currentRecord;
  searchData = '';
  flag = true;
  inputId: any;
  isCameraOpen = false;
  isMobile = false;
  tcPreview = null;
  invPreview = null;
  codeReader: BrowserMultiFormatReader | null = null;
  postData = {
    didate: '',
  };
  activeCaptureType: 'tc' | 'inv' = 'tc';

  constructor(
    private http: HttpClient,
    public loadingController: LoadingController,
    private screenOrientation: ScreenOrientation,
    public toastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  @ViewChild('inputId') myInputField;
  @ViewChild('inputFile1', { static: false })
  inputFile1!: ElementRef<HTMLInputElement>;
  @ViewChild('inputFile2', { static: false })
  inputFile2!: ElementRef<HTMLInputElement>;
  @ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>;

  ngOnInit() {
   this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    this.brandImage = localStorage.getItem('brandImage');
    this.getData();
    // this.screenOrientation.unlock();
    this.registerForm = this.formBuilder.group({
      tcref: [''],
      remarks: [''],
      recvqty: [0, Validators.required],
      appqty: [0, Validators.required],
      doe: ['', Validators.required],
      // pin: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  async getData() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000,
      spinner: 'dots',
    });
    await loading.present();
    const headers = {
      'auth-id': localStorage.getItem('authid'),
      'client-id': localStorage.getItem('clientid'),
      user: localStorage.getItem('userid'),
      password: localStorage.getItem('password'),
    };
    this.http.get<any>(this.dataUrl + '/api/approverm', { headers }).subscribe({
      next: async (data) => {
        this.rmArray = data.message;
        this.rmArray2 = data.message;
        this.rmArrayTemp = data.message;
        loading.dismiss();
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      },
      error: (errordata) => {
        if (errordata.error.message) {
          loading.dismiss();
          this.toastfunction(errordata.error.message, 'danger');
        } else {
          this.toastfunction(
            'Invalid Company Url, Please Check in Home page',
            'danger'
          );
        }
      },
    });
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

  async submitData() {
    const headers = {
      'auth-id': localStorage.getItem('authid'),
      'client-id': localStorage.getItem('clientid'),
      user: localStorage.getItem('userid'),
      password: localStorage.getItem('password'),
    };
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000,
      spinner: 'dots',
    });
    await loading.present();

    if (this.registerForm.invalid) {
      return;
    } else if (
      this.tcIsAvaiable === 1 &&
      this.registerForm.controls['tcref'].value == null
    ) {
      this.toastfunction('Please Fill the Test Cert Reference', 'danger');
      loading.dismiss();
      return;
    } else if (
      this.registerForm.value.recvqty < this.registerForm.value.appqty
    ) {
      this.toastfunction(
        'Approval Quality is not greater then Received Quality',
        'danger'
      );
      loading.dismiss();
      return;
    } else if (
      this.isApproved == '0' &&
      (this.registerForm.value.remarks == '' ||
        this.registerForm.value.remarks == null)
    ) {
      this.toastfunction('Please Fill Remarks', 'danger');
      loading.dismiss();
      return;
    } else {
      var finalDate = this.registerForm.value.doe.split('T')[0];

      // var dat=this.registerForm.value.doe;
      // var arr=dat.split("-");
      // var finalDate=arr[0]+"-"+arr[1]+"-"+arr[2];

      // let paramdata=this.rmDetails.map((x)=>{
      //   return parseInt(x.paramref)+":"+parseFloat(x.paramval)
      // })

      const body = new FormData();
      body.append('tc-file', this.tcfile);
      body.append('inv-file', this.invfile);
      // body.append('operatorid', this.registerForm.value.pin);
      body.append('grnid', this.currentRecord.grnid);
      body.append('approval', this.isApproved);
      body.append('remarks', this.registerForm.value.remarks);
      body.append('tstcert', this.registerForm.value.tcref);
      body.append('doe', finalDate);
      body.append('appqty', this.registerForm.value.appqty);
      body.append('recvqty', this.registerForm.value.recvqty);
      // body.append('paramdata', JSON.stringify(paramdata));
      this.rmDetails.map((x, ind) => {
        body.append(
          'paramdata[' + ind + ']',
          parseInt(x.paramref) + ':' + parseFloat(x.paramval)
        );
      });

      console.log(body);
      this.http
        .post<any>(this.dataUrl + '/api/approverm', body, { headers })
        .subscribe({
          next: async (data) => {
            if (data.status == 'success') {
              loading.dismiss();
              this.toastfunction(data.message, 'success');
              this.showEntryCard = false;
              this.registerForm.reset();
              // this.screenOrientation.unlock();
              this.rmArray = [];
              this.getData();
            } else {
              loading.dismiss();
              this.toastfunction(data.message, 'danger');
              this.showEntryCard = true;
            }
          },
          error: (errordata) => {
            if (errordata.error.message) {
              loading.dismiss();
              this.showEntryCard = true;
              this.toastfunction(errordata.error.message, 'danger');
            } else {
              this.toastfunction(
                'Invalid Company Url, Please Check in Home page',
                'danger'
              );
            }
          },
        });
    }
  }

  async itemDetail(item) {
    this.tcfile = '';
    this.invfile = '';
    this.isApproved = '1';
    this.currentRecord = item;
    this.registerForm.reset();
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000,
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
      .get<any>(this.dataUrl + '/api/approverm/' + item.ramid, { headers })
      .subscribe({
        next: async (data) => {
          this.rmDetails = data.message;
          // console.log(data.message)
          this.tcRef('1');
          this.approval('1');
          this.registerForm.get('doe').patchValue(this.formatDate(new Date()));
          this.registerForm.get('recvqty').patchValue(item.recvqty);
          this.registerForm.get('appqty').patchValue(item.recvqty);
          this.showEntryCard = true;
          setTimeout(() => {
            this.myInputField.setFocus();
          }, 700);
          loading.dismiss();
        },
        error: (errordata) => {
          if (errordata.error.message) {
            loading.dismiss();
            this.toastfunction(errordata.error.message, 'danger');
          } else {
            this.toastfunction(
              'Invalid Company Url, Please Check in Home page',
              'danger'
            );
          }
        },
      });
  }

  store;
  prefill(inx, val) {
    if (val != '') {
      this.store = val;
      if (this.rmDetails[inx]) {
        this.rmDetails[inx].paramval = '';
      }
    }
  }

  modaldismiss() {
    this.showEntryCard = false;
    this.registerForm.reset();
  }

  blured(inx, val) {
    if (val == '') {
      this.rmDetails[inx].paramval = parseFloat(this.store);
    } else {
      this.rmDetails[inx].paramval = parseFloat(val);
    }
  }

  tcRef(value) {
    if (value == '1') {
      this.tcIsAvaiable = 1;
    }
    if (value == '0') {
      this.tcIsAvaiable = 0;
    }
  }

  approval(value) {
    if (value == '1') {
      this.isApproved = '1';
    }
    if (value == '0') {
      this.isApproved = '0';
    }
  }

  filesel(event: any, type: string) {
    const file = event.target.files[0];
    if (!file) return;

    if (type === 'tc') {
      this.tcfile = file;
      this.readImagePreview(file, 'tc');
    }

    if (type === 'inv') {
      this.invfile = file;
      this.readImagePreview(file, 'inv');
    }
  }

  readImagePreview(file: File, type: 'tc' | 'inv') {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === 'tc') {
          this.tcPreview = reader.result as string;
        } else if (type === 'inv') {
          this.invPreview = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    } else {
      if (type === 'tc') this.tcPreview = null;
      if (type === 'inv') this.invPreview = null;
    }
  }

  async startCamera(type: 'tc' | 'inv') {
    this.isCameraOpen = true;
    this.activeCaptureType = type;

    if (!this.codeReader) {
      this.codeReader = new BrowserMultiFormatReader();
    }

    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter((d) => d.kind === 'videoinput');
      const backCamera =
        videoDevices.find((d) => d.label.toLowerCase().includes('back')) ||
        videoDevices[0];

      await this.codeReader.decodeFromVideoDevice(
        backCamera.deviceId,
        this.video.nativeElement,
        () => {}
      );
    } catch (err) {
      console.error('Camera error:', err);
    }
  }

  captureImage() {
    const videoEl = this.video.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = videoEl.videoWidth;
    canvas.height = videoEl.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(videoEl, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) return;

      const file = new File([blob], 'captured-image.jpg', {
        type: 'image/jpeg',
      });
      const previewURL = URL.createObjectURL(blob);

      if (this.activeCaptureType === 'tc') {
        this.tcfile = file;
        this.tcPreview = previewURL;
      } else if (this.activeCaptureType === 'inv') {
        this.invfile = file;
        this.invPreview = previewURL;
      }

      this.stopCamera();
      this.isCameraOpen = false;
    }, 'image/jpeg');
  }

  stopCamera() {
    if (this.codeReader) {
      this.codeReader.reset();
    }
    this.isCameraOpen = false;
  }

  onChangeOnservation(i, val) {
    if (parseFloat(val) < 0) {
      this.rmDetails[i].paramval = 0;
      return false;
    }
    this.rmDetails[i].paramval = val;
  }

  formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear() + 1;
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.rmArray = this.rmArray2;
    } else {
      if (filterValue.length >= 3) {
        this.rmArray = this.rmArrayTemp.filter(
          (employee) =>
            employee.grnid.toLowerCase().includes(filterValueLower) ||
            employee.grndate.toLowerCase().includes(filterValueLower) ||
            employee.invSupName.toLowerCase().includes(filterValueLower) ||
            employee.ramname.toLowerCase().includes(filterValueLower) ||
            employee.recvqty.toLowerCase().includes(filterValueLower)
        );
      }
    }
  }

  sort(colName, flag) {
    if (this.flag) {
      this.rmArray.sort((a, b) =>
        a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0
      );
      this.flag = false;
      return false;
    }
    if (!this.flag) {
      this.rmArray = this.rmArray.reverse();
      this.flag = true;
      return false;
    }
  }

  clearTest() {
    if (this.inputFile1?.nativeElement) {
      this.inputFile1.nativeElement.value = '';
    }
    this.tcfile = null;
    this.tcPreview = null;
    this.stopCamera();
  }

  clearInv() {
    if (this.inputFile2?.nativeElement) {
      this.inputFile2.nativeElement.value = '';
    }
    this.invfile = null;
    this.invPreview = null;
    this.stopCamera();
  }
}
