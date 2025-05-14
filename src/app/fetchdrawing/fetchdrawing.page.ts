import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserMultiFormatReader, Result } from '@zxing/library';

@Component({
  selector: 'app-fetchdrawing',
  templateUrl: './fetchdrawing.page.html',
  styleUrls: ['./fetchdrawing.page.scss'],
})
export class FetchdrawingPage implements OnInit, AfterViewInit {
  brandImage = '';
  planid: any = '';
  datapass: any = {};
  dataUrl = localStorage.getItem('url');
//  @ViewChild('video', { static: false }) video: ElementRef<HTMLVideoElement>;
 @ViewChild('video', { static: false }) video: ElementRef;
  isScanModalOpen = false;
  codeReader = new BrowserMultiFormatReader();
  constructor(
    private http: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.brandImage = localStorage.getItem('brandImage');
    this.scan();
  }

  ngAfterViewInit() {
  const videoEl = this.video?.nativeElement;
  if (videoEl) {
    videoEl.onloadedmetadata = () => {
      this.startScanning();
    };
  }
}

  // async startScanning() {
  //   try {
  //     const result: Result = await this.codeReader.decodeOnceFromVideoDevice(
  //       undefined,
  //       this.video.nativeElement
  //     );
  //     const scannedText = result.getText();

  //     if (scannedText) {
  //       const data = await BarcodeScanner.scan();
  //       const loading = await this.loadingController.create({
  //         cssClass: 'my-custom-class',
  //         message: 'Please wait...',
  //         // duration: 2000,
  //         spinner: 'dots',
  //       });

  //       if (data.text.length > 0) {
  //         await loading.present();
  //         const headers = {
  //           'auth-id': localStorage.getItem('authid'),
  //           'client-id': localStorage.getItem('clientid'),
  //           user: localStorage.getItem('userid'),
  //           password: localStorage.getItem('password'),
  //         };

  //         this.http
  //           .get<any>(this.dataUrl + '/api/compdrawing/' + data.text, {
  //             headers,
  //           })
  //           .subscribe({
  //             next: async (data) => {
  //               this.datapass = data.message[0];
  //               // console.log(this.dataUrl+this.datapass[0].drawingfile+".pdf")
  //               window.open(this.dataUrl + this.datapass.drawingfile);
  //               loading.dismiss();
  //             },
  //             error: (errordata) => {
  //               if (errordata.error.message) {
  //                 loading.dismiss();
  //                 this.toastfunction(errordata.error.message, 'danger');
  //               } else {
  //                 this.toastfunction(
  //                   'Invalid Company Url, Please Check in Home page',
  //                   'danger'
  //                 );
  //                 loading.dismiss();
  //               }
  //             },
  //           });
  //       }
  //     }
  //   } catch (err) {
  //     console.error('Scan error:', err);
  //     this.toastfunction(
  //       'Camera access denied or scanning cancelled.',
  //       'danger'
  //     );
  //     this.stopScan();
  //   }
  // }

//   async startScanning() {
//   try {
//     const result: Result = await this.codeReader.decodeOnceFromVideoDevice(
//       undefined,
//       this.video.nativeElement
//     );

//     const scannedText = result.getText();
//     const data = await BarcodeScanner.scan();
//     if (scannedText) {
//       this.fetchDrawingData(scannedText);
//     } else {
//       this.toastfunction('No QR code detected.', 'warning');
//       this.closeScanModal();
//     }

//   } catch (err: any) {
//     console.error('Scan error:', err);

//     if (err.name === 'NotFoundException') {
//       this.toastfunction(
//         'No QR code found before video stream ended.',
//         'warning'
//       );
//     } else {
//       this.toastfunction('Scan error or camera not accessible.', 'danger');
//     }

//     this.closeScanModal();
//   }
// }

async startScanning() {
  try {
    // Make sure you initialize the reader if not already
    if (!this.codeReader) {
      this.codeReader = new BrowserMultiFormatReader();
    }

    const devices = await this.codeReader.listVideoInputDevices();

    if (devices.length === 0) {
      this.toastfunction('No camera devices found.', 'danger');
      this.closeScanModal();
      return;
    }

    const result: Result = await this.codeReader.decodeOnceFromVideoDevice(
      devices[0].deviceId,
      this.video.nativeElement
    );

    const scannedText = result?.getText();

    if (scannedText) {
      this.fetchDrawingData(scannedText);
    } else {
      this.toastfunction('No QR code detected.', 'warning');
      this.closeScanModal();
    }

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

    this.http
      .get<any>(`https://your-api-url/api/compdrawing/${scannedText}`, { headers })
      .subscribe({
        next: async (data) => {
          const fileUrl = data.message[0]?.drawingfile;
          if (fileUrl) {
            window.open(`https://your-api-url/${fileUrl}`, '_blank');
          } else {
            this.toastfunction('No drawing file found.', 'warning');
          }
          loading.dismiss();
          this.closeScanModal();
        },
        error: (error) => {
          this.toastfunction('Failed to fetch drawing info.', 'danger');
          loading.dismiss();
          this.closeScanModal();
        },
      });
  }

  stopScan() {
    // const stream = this.video?.nativeElement?.srcObject as MediaStream;
    // if (stream) {
    //   stream.getTracks().forEach((track) => track.stop());
    //   this.video.nativeElement.srcObject = null;
    // }
    this.codeReader.reset();
    this.isScanModalOpen = false;
  }

  // closeScanModal() {
  //   this.isScanModalOpen = false;
  //   this.stopScan();
  // }

  closeScanModal() {
  this.isScanModalOpen = false;
  this.isScanning = false;
  this.stopScan();
}

   private isScanning = false;

async scan() {
  if (this.isScanning) return; // Prevent multiple scan calls
  this.isScanning = true;

  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const hasVideoInput = devices.some(device => device.kind === 'videoinput');

    if (!hasVideoInput) {
      this.toastfunction('No camera device found. Please connect a camera.', 'danger');
      return;
    }
    this.isScanModalOpen = true;

    setTimeout(() => this.startScanning(), 500);
  } catch (err) {
    this.toastfunction('Camera permission denied.', 'danger');
    this.isScanning = false;
  }
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
        .get<any>(this.dataUrl + '/api/compdrawing/' + this.planid, { headers })
        .subscribe({
          next: async (data) => {
            this.datapass = data.message[0];
            // console.log(this.dataUrl+this.datapass[0].drawingfile+".pdf")
            window.open(this.dataUrl + this.datapass.drawingfile );
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
              loading.dismiss();
            }
          },
        });
    }
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
}
