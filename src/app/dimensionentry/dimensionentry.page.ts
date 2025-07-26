import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { IonInput, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { BrowserMultiFormatReader, NotFoundException, Result } from '@zxing/library';

@Component({
  selector: 'app-dimensionentry',
  templateUrl: './dimensionentry.page.html',
  styleUrls: ['./dimensionentry.page.scss'],
})
export class DimensionentryPage implements OnInit , AfterViewInit {
  planid: any = '';
  modaldata: any;
  datapass: any = {};
  showEntryCard = false;
  dataUrl = localStorage.getItem('url');
  registerForm: FormGroup;
  submitted = false;
  brandImage = '';
  rmDetails = [];
  isApproved = '1';
  flag = false;

  constructor(
    private http: HttpClient,
    private screenOrientation: ScreenOrientation,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  @ViewChild('inputId') myInputField;
@ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>;
  isScanModalOpen = false;
  codeReader = new BrowserMultiFormatReader();
  isMobile: boolean = false;
  isVideoReady = false;
  private isScanning = false;

  ngOnInit() {
    this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    this.brandImage = localStorage.getItem('brandImage');
    this.scan();
    this.registerForm = this.formBuilder.group({
      remarks: [''],
      // pin: ['', Validators.required]
    });
    this.screenOrientation.unlock();
  }

    ngAfterViewInit() {
    const videoEl = this.video?.nativeElement;
    if (videoEl) {
      videoEl.onloadedmetadata = () => {
        setTimeout(() => this.startScanning(), 300);
      };
    }
  }

   // ================
    async scan() {
    if (!this.isMobile) {
      this.toastfunction('Camera is available only on mobile devices.', 'warning');
      return;
    }
    if (this.isScanning) return;

    this.isScanning = true;
    this.isVideoReady = false;
    const devices = await navigator.mediaDevices.enumerateDevices();
    const hasVideoInput = devices.some(device => device.kind === 'videoinput');

    if (!hasVideoInput) {
      this.toastfunction('No camera device found. Please connect a camera.', 'danger');
       this.isScanning = false;
      return;
    }

    this.isScanModalOpen = true;

    setTimeout(() => {
      this.startScanning();
    }, 300);
  }


  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }



async startScanning() {
  try {
    if (!this.codeReader) {
      this.codeReader = new BrowserMultiFormatReader();
    }

    const devices = await this.codeReader.listVideoInputDevices();
    if (devices.length === 0) {
      this.toastfunction('No camera devices found.', 'danger');
      this.closeScanModal();
      return;
    }

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    let selectedDevice = devices.find(device =>
      (isMobile
        ? device.label.toLowerCase().includes('back') ||
          device.label.toLowerCase().includes('environment')
        : device.label.toLowerCase().includes('front') ||
          device.label.toLowerCase().includes('user'))
    ) || devices[0];
    const videoElement = this.video.nativeElement;
    this.codeReader.decodeFromVideoDevice(selectedDevice.deviceId, videoElement, (result, err) => {
      if (result) {
        const scannedText = result.getText();
        this.planid = scannedText;
        this.fetchDrawingData(scannedText);
        this.closeScanModal();
      } else if (err && !(err instanceof NotFoundException)) {
        this.toastfunction('Scan error or camera not accessible.', 'danger');
        this.closeScanModal();
      }
    });
    videoElement.onloadedmetadata = () => {
      videoElement.play();
      this.isVideoReady = true;
    };

  } catch (err: any) {
    console.error('Scan error:', err);

    if (err.name === 'NotFoundException') {
      this.toastfunction('No QR code found before video stream ended.', 'warning');
    } else {
      this.toastfunction('Scan error or camera not accessible.', 'danger');
    }

    this.closeScanModal();
  }
}


 
  async fetchDrawingData(scannedText: string) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'dots',
    });

    const headers = {
      'auth-id': localStorage.getItem('authid') || '',
      'client-id': localStorage.getItem('clientid') || '',
      user: localStorage.getItem('userid') || '',
      password: localStorage.getItem('password') || '',
    };

    await loading.present();

    this.http.get<any>(`${this.dataUrl}/api/approvecpd/${scannedText}`, { headers }).subscribe({
      next: async (data) => {
        // Handle successful response
        this.datapass = data.message;
        this.rmDetails = data.message.paramdata;
        this.showEntryCard = true;
        this.approval('1');
        loading.dismiss();
        this.registerForm.reset();
        this.stopScan();
        setTimeout(() => this.myInputField?.setFocus(), 700);
      },
      error: (err) => {
        loading.dismiss();
        this.showEntryCard = false;
        this.toastfunction(
          err?.error?.message || 'Invalid Company Url. Please check in Home page.',
          'danger'
        );
        this.registerForm.reset();
        this.stopScan();
      },
    });
  }

    stopScan() {
    this.codeReader.reset();
    const stream = this.video?.nativeElement?.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      this.video.nativeElement.srcObject = null;
    }
    this.isScanModalOpen = false;
    this.isScanning = false;
  }

  closeScanModal() {
    this.stopScan();
  }
  

  async sendData() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000,
      spinner: 'dots',
    });
    if (this.planid.length > 0) {
      await loading.present();
      const headers = {
        'auth-id': localStorage.getItem('authid'),
        'client-id': localStorage.getItem('clientid'),
        user: localStorage.getItem('userid'),
        password: localStorage.getItem('password'),
      };
      this.http
        .get<any>(this.dataUrl + '/api/dimentry/' + this.planid, { headers })
        .subscribe({
          next: async (data) => {
            this.datapass = data.message;
            this.rmDetails = data.message.paramdata;
            this.showEntryCard = true;
            this.approval('1');
            loading.dismiss();
            this.registerForm.reset();
            setTimeout(() => {
              this.myInputField.setFocus();
            }, 700);
          },
          error: (errordata) => {
            if (errordata.error.message) {
              loading.dismiss();
              this.showEntryCard = false;
              this.toastfunction(errordata.error.message, 'danger');
            } else {
              this.toastfunction(
                'Invalid Company Url, Please Check in Home page',
                'danger'
              );
            }
            this.registerForm.reset();
          },
        });
    }
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
    this.submitted = true;

    if (this.registerForm.invalid) {
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
      let paramdata = this.rmDetails.map((x) => {
        return {
          dimref: parseInt(x.dimref),
          dimval1: parseFloat(x.dimval1),
          dimval2: parseFloat(x.dimval2),
          dimval3: parseFloat(x.dimval3),
          dimval4: parseFloat(x.dimval4),
          dimval5: parseFloat(x.dimval5),
          dimval6: parseFloat(x.dimval6),
          dimval7: parseFloat(x.dimval7),
          dimval8: parseFloat(x.dimval8),
          dimval9: parseFloat(x.dimval9),
          dimval10: parseFloat(x.dimval10),
        };
      });
      // paramdata.map((x)=>{
      //   if(x.paramval <= 0){
      //     this.toastfunction("Observation should not be 0 or negative","danger");
      //     return;
      //   }
      // })
      const body = {
        planid: this.datapass[0].planid,
        approval: parseInt(this.isApproved),
        remarks:
          this.registerForm.value.remarks == null
            ? ''
            : this.registerForm.value.remarks,
        // "operatorid": parseInt(this.registerForm.value.pin),
        dimdata: paramdata,
      };

      this.http
        .post<any>(this.dataUrl + '/api/dimentry', body, { headers })
        .subscribe({
          next: async (data) => {
            if (data.status == 'success') {
              loading.dismiss();
              this.toastfunction(data.message, 'success');
              this.showEntryCard = false;
              this.planid = '';
              this.registerForm.reset();
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

  modaldismiss() {
    this.showEntryCard = false;
    this.registerForm.reset();
  }

  navBack() {
    this.router.navigate(['login']);
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

  store;
  prefill(inx, val, prop) {
    if (val != '') {
      this.store = val;
      this.rmDetails[inx][prop] = '';
    }
  }

  blured(inx, val, prop, pos) {
    if (val == '') {
      this.rmDetails[inx][prop] = parseFloat(this.store);
    } else {
      this.rmDetails[inx][prop] = parseFloat(val);
      // if(parseFloat(this.rmDetails[inx].dimllimit) <= parseFloat(val) && parseFloat(this.rmDetails[inx].dimulimit) >= parseFloat(val)){
      //   this.rmDetails[inx][prop]=parseFloat(val);
      //   // document.getElementById("alert"+pos+inx).style.border="1px solid #80808038";
      //   // this.flag=true;
      // }
      // else{
      //   this.rmDetails[inx][prop]=parseFloat(this.store);
      //   this.toastfunction("Range accept between : "+this.rmDetails[inx].dimllimit+" - "+this.rmDetails[inx].dimulimit+"!!!","danger");
      //   // document.getElementById("alert"+pos+inx).style.border="1px solid red";
      //   // this.flag=false;
      // }
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

  onChangeOnservation(i, val, prop) {
    if (parseFloat(val) < 0.001) {
      this.rmDetails[i][prop] = 0.001;
      return false;
    }
    this.rmDetails[i][prop] = val;
  }
}
