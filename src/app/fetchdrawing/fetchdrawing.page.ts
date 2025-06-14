import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserMultiFormatReader, NotFoundException, Result } from '@zxing/library';

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
  isMobile: boolean = false;
  isVideoReady = false;
  private isScanning = false;
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
    this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
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
    this.toastfunction('Scan error or camera not accessible.', 'danger');
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
      .get<any>(`${this.dataUrl}/api/compdrawing/${scannedText}`, { headers })
      .subscribe({
        next: async (data) => {
          const fileUrl = data.message[0]?.drawingfile;
          if (fileUrl) {
            window.open(`${this.dataUrl}/${fileUrl}`, '_blank');
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


async scan() {
  if (!this.isMobile) {
    this.toastfunction('Camera is available only on mobile devices.', 'warning');
    return;
  }
  if (this.isScanning) return;

  this.isScanning = true;
  this.isVideoReady = false;

  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const hasVideoInput = devices.some(device => device.kind === 'videoinput');

    if (!hasVideoInput) {
      this.toastfunction('No camera device found. Please connect a camera.', 'danger');
      this.isScanning = false;
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
