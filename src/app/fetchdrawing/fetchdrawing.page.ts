import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class FetchdrawingPage implements OnInit {
  brandImage = '';
  planid: any = '';
  datapass: any = {};
  dataUrl = localStorage.getItem('url');
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

  async startScanning() {
    try {
      const result: Result = await this.codeReader.decodeOnceFromVideoDevice(
        undefined,
        this.video.nativeElement
      );
      const scannedText = result.getText();

      if (scannedText) {
        const data = await BarcodeScanner.scan();
        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          // duration: 2000,
          spinner: 'dots',
        });

        if (data.text.length > 0) {
          await loading.present();
          const headers = {
            'auth-id': localStorage.getItem('authid'),
            'client-id': localStorage.getItem('clientid'),
            user: localStorage.getItem('userid'),
            password: localStorage.getItem('password'),
          };

          this.http
            .get<any>(this.dataUrl + '/api/compdrawing/' + data.text, {
              headers,
            })
            .subscribe({
              next: async (data) => {
                this.datapass = data.message[0];
                // console.log(this.dataUrl+this.datapass[0].drawingfile+".pdf")
                window.open(this.dataUrl + this.datapass.drawingfile);
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
    } catch (err) {
      console.error('Scan error:', err);
      this.toastfunction(
        'Camera access denied or scanning cancelled.',
        'danger'
      );
      this.stopScan();
    }
  }

  stopScan() {
    const stream = this.video?.nativeElement?.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      this.video.nativeElement.srcObject = null;
    }
    this.isScanModalOpen = false;
  }

  closeScanModal() {
    this.stopScan();
  }

  async scan() {
    // Check for camera availability first
    const devices = await navigator.mediaDevices.enumerateDevices();
    const hasVideoInput = devices.some(
      (device) => device.kind === 'videoinput'
    );

    if (!hasVideoInput) {
      this.toastfunction(
        'No camera device found. Please connect a camera.',
        'danger'
      );
      return;
    }

    this.isScanModalOpen = true;

    setTimeout(() => {
      this.startScanning();
    }, 300);
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
            window.open(this.dataUrl + this.datapass.drawingfile + '.pdf');
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
