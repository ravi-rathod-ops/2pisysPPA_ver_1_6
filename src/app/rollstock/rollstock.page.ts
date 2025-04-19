import { Component, OnInit } from '@angular/core';import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {  IonInput } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Printer,PrintOptions } from '@ionic-native/printer/ngx/index';

@Component({
  selector: 'app-rollstock',
  templateUrl: './rollstock.page.html',
  styleUrls: ['./rollstock.page.scss'],
})
export class RollstockPage implements OnInit {
  brandImage="";
  planid: any="";
  datapass: any={};
  dataUrl=localStorage.getItem('url');
  framelink="";
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
      this.http.get<any>(this.dataUrl+'/api/reportlinks/rollstk',{headers}).subscribe({
        next: async data => {
          this.datapass=data.message[0];   
          console.log(data)    
          loading.dismiss(); 

          this.datapass.link=this.datapass.link.replace("{{1}}",data.text);
          this.datapass.link= this.datapass.credentials == 1 ? this.datapass.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.datapass.link=this.datapass.link; 
          // window.open(this.datapass.link);    
          this.framelink=this.datapass.link;

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
  //   if(this.planid.length > 0)
  //   {     
  //     this.datapass.link=this.datapass.link.replace("{{1}}",this.planid);
  //     this.datapass.link= this.datapass.credentials == 1 ? this.datapass.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.datapass.link=this.datapass.link; 
  //     window.open(this.datapass.link);    
  //   }
    
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
  
  print()
  {
    this.printer.print(); 
  }


}
