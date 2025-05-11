import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {  IonInput } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Printer,PrintOptions } from '@ionic-native/printer/ngx/index';
import { BrowserMultiFormatReader, Result } from '@zxing/library';

@Component({
  selector: 'app-keytraceability',
  templateUrl: './keytraceability.page.html',
  styleUrls: ['./keytraceability.page.scss'],
})
export class KeytraceabilityPage implements OnInit {

  brandImage="";
  planid: any="";
  datapass: any={};
  dataUrl=localStorage.getItem('url');  
  framelink="";
   @ViewChild('video', { static: false }) video: ElementRef;
    isScanModalOpen = false;
    codeReader = new BrowserMultiFormatReader();
  constructor(public inappbrowser:InAppBrowser,private printer: Printer,private http: HttpClient,public loadingController: LoadingController,public toastController: ToastController,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');   
    this.getlink();
  }


 async getlink(){
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    // duration: 2000,
    spinner:'dots'
  });

  const headers = { 
    'auth-id': localStorage.getItem('authid'), 
    'client-id': localStorage.getItem('clientid'),
    'user': localStorage.getItem('userid'),
    'password':localStorage.getItem('password') } 
    this.http.get<any>(this.dataUrl+'/api/reportlinks/keytrace',{headers}).subscribe({
      next: async data => {
        this.datapass=data.message[0];   
        console.log(data)    
        loading.dismiss(); 
        this.scan();
      },
      error: errordata => {
        if(errordata.error.message){
        loading.dismiss();                   
        this.toastfunction(errordata.error.message,"danger");  
        }
        else{
          this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
          loading.dismiss();  
        }          
      }
    });

 }
 
  async scan_bk() {
    const data = await BarcodeScanner.scan();
    // const loading = await this.loadingController.create({
    //   cssClass: 'my-custom-class',
    //   message: 'Please wait...',
    //   // duration: 2000,
    //   spinner:'dots'
    // });
    
    // if(data.text.length > 0)
    // {
    //   await loading.present();
    //   const headers = { 
    //     'auth-id': localStorage.getItem('authid'), 
    //     'client-id': localStorage.getItem('clientid'),
    //     'user': localStorage.getItem('userid'),
    //     'password':localStorage.getItem('password') }
    //     this.planid=data.text;
    //   this.http.get<any>(this.dataUrl+'/api/reportlinks/keytrace/'+data.text,{headers}).subscribe({
    //     next: async data => {
    //       this.datapass=data.message[0];
    //       let url = this.datapass.link;
    //       url=url.replace("{{1}}",this.planid);
    //       window.open(url);           
    //       loading.dismiss(); 
    //     },
    //     error: errordata => {
    //       if(errordata.error.message){
    //       loading.dismiss();                   
    //       this.toastfunction(errordata.error.message,"danger");  
    //       }
    //       else{
    //         this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
    //         loading.dismiss();  
    //       }          
    //     }
    //   });

    // }


    if(data.text.length > 0){
      this.datapass.link=this.datapass.link.replace("{{1}}",data.text);
      this.datapass.link= this.datapass.credentials == 1 ? this.datapass.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.datapass.link=this.datapass.link; 
      this.framelink=this.datapass.link;
      // window.open(this.datapass.link);    
    }
   
  }
    async scan() {
    // Check for camera availability first
    const devices = await navigator.mediaDevices.enumerateDevices();
    const hasVideoInput = devices.some(device => device.kind === 'videoinput');

    if (!hasVideoInput) {
      this.toastfunction('No camera device found. Please connect a camera.', 'danger');
      return;
    }

    this.isScanModalOpen = true;

    setTimeout(() => {
      this.startScanning();
    }, 300);
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
            spinner:'dots'
          });
          
          if(data.text.length > 0)
          {
            await loading.present();
            const headers = { 
              'auth-id': localStorage.getItem('authid'), 
              'client-id': localStorage.getItem('clientid'),
              'user': localStorage.getItem('userid'),
              'password':localStorage.getItem('password') }
              this.planid=data.text;
            this.http.get<any>(this.dataUrl+'/api/reportlinks/keytrace/'+data.text,{headers}).subscribe({
              next: async data => {
                this.datapass=data.message[0];
                let url = this.datapass.link;
                url=url.replace("{{1}}",this.planid);
                window.open(url);           
                loading.dismiss(); 
              },
              error: errordata => {
                if(errordata.error.message){
                loading.dismiss();                   
                this.toastfunction(errordata.error.message,"danger");  
                }
                else{
                  this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
                  loading.dismiss();  
                }          
              }
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
  



  async sendData()
  {
   
    // const loading = await this.loadingController.create({
    //   cssClass: 'my-custom-class',
    //   message: 'Please wait...',
    //   // duration: 2000,
    //   spinner:'dots'
    // });
    
    // if(this.planid.length > 0)
    // {
    //   await loading.present();
    //   const headers = { 
    //     'auth-id': localStorage.getItem('authid'), 
    //     'client-id': localStorage.getItem('clientid'),
    //     'user': localStorage.getItem('userid'),
    //     'password':localStorage.getItem('password') }
      

    //   this.http.get<any>(this.dataUrl+'/api/reportlinks/keytrace',{headers}).subscribe({
    //     next: async data => {
    //       this.datapass=data.message[0];          
    //       let url = this.datapass.link;
    //       url=url.replace("{{1}}",this.planid);
    //       window.open(url);
    //       loading.dismiss(); 
    //     },
    //     error: errordata => {
    //       if(errordata.error.message){
    //       loading.dismiss();                   
    //       this.toastfunction(errordata.error.message,"danger");            
    //       }
    //       else{
    //         this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
    //         loading.dismiss();  
    //       }          
    //     }
    //   });

    // }

    if(this.planid.length > 0)
    {     
      this.datapass.link=this.datapass.link.replace("{{1}}",this.planid);
      this.datapass.link= this.datapass.credentials == 1 ? this.datapass.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.datapass.link=this.datapass.link; 
      this.framelink=this.datapass.link;
      // window.open(this.datapass.link);    

    }
  }


  print()
  {
    this.printer.print(); 
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



}
