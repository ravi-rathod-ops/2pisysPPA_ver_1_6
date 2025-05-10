import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {  IonInput } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Printer,PrintOptions } from '@ionic-native/printer/ngx/index';

@Component({
  selector: 'app-rmstock',
  templateUrl: './rmstock.page.html',
  styleUrls: ['./rmstock.page.scss'],
})
export class RmstockPage implements OnInit {

  brandImage="";
  planid: any="";
  datapass: any={};
  dataUrl=localStorage.getItem('url');
  framelink="";
  storeArray=[];
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
      this.http.get<any>(this.dataUrl+'/api/reportlinks/ramstk ',{headers}).subscribe({
        next: async data => {
          this.datapass=data.message[0];  
          this.storeArray=data.message["stores"];
          this.storeArray.unshift("All");
          console.log(data)    
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

  // async scan() {
  //   const data = await BarcodeScanner.scan();

  //   if(data.text.length > 0){
  //     this.datapass.link=this.datapass.link.replace("{{1}}",data.text);
  //     this.datapass.link= this.datapass.credentials == 1 ? this.datapass.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.datapass.link=this.datapass.link;
  //     window.open(this.datapass.link);
  //   }

  // }


  // async sendData()
  // {

  //   // if(this.planid.length > 0)
  //   // {
  //     this.link=this.datapass.link;
  //     this.link=this.link.replace("{{1}}",this.planid);
  //     this.link= this.datapass.credentials == 1 ? this.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.link=this.link;
  //     // window.open(this.datapass.link);
  //     this.framelink=this.link;
  //   // }

  // }



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

  //   print()
  //   {
  //     // this.printer.print();
  //    const iframe = document.getElementById('ReportPanel') as HTMLIFrameElement;
  // const iframeDoc = iframe?.contentWindow?.document;

  // if (iframeDoc) {
  //   const printWindow = window.open('', '', 'width=600,height=600');
  //   if (printWindow) {
  //     printWindow.document.write(`<html><head><title>Print</title></head><body>${iframeDoc.documentElement.innerHTML}</body></html>`);
  //     printWindow.document.close();
  //     printWindow.focus();
  //     printWindow.print();
  //     printWindow.close();
  //   }
  //   }else{
  //     alert('not working')
  //   }
  //   }

  link;
  selectDevice(ind) {
  
    if(ind.detail.value == "All"){
      this.link=this.datapass.link; 
      this.link=this.link.replace("{{1}}","");
      this.link= this.datapass.credentials == 1 ? this.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.link=this.link;    
      this.framelink=this.link;
    }
    else{
      this.link=this.datapass.link; 
      this.link=this.link.replace("{{1}}",this.planid);
      this.link= this.datapass.credentials == 1 ? this.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.link=this.link;    
      this.framelink=this.link;
    }
  }

  print() {
  const win = window.open(this.framelink, '_blank');
  if (win) {
    win.focus();
    win.onload = () => {
      try {
        win.print();
      } catch (e) {
        console.warn("Print failed or PDF not fully loaded yet.");
      }
    };
  }
}
}
