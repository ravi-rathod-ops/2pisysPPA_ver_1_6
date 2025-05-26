import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Md5} from 'ts-md5';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
//   url="https://ppa.2pisys.com";
//  data= localStorage.setItem('url',this.url);
  
  // dataUrl="https://ppa.2pisys.com";
  datapass: any={"base64encodedimage":"./assets/image/no_logo.png"};
  dataUrl='';
  dataUrls=environment.COMPANY_URL;//"https://ppa.2pisys.com";
  authid=environment.AUTHENTICATE_ID;//"PXpv2YWV41L223hGDuXY";
  clientid=environment.CLIENT_ID;//"ppa";
  registerForm: FormGroup;
  submitted=false;
  cversion=1.61;
  versionFlag=false;

  constructor(public http: HttpClient,private formBuilder: FormBuilder,public loadingController: LoadingController,public toastController: ToastController,private router: Router){}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required],
      company_id: ['', Validators.required]
  });


    if(localStorage.getItem('authid') != null)
    {
      this.authid=localStorage.getItem('authid');       
    }
    else
    {
      localStorage.setItem('authid',this.authid);
    }

    if(localStorage.getItem('clientid') != null)
    {
      this.clientid=localStorage.getItem('clientid');       
    }
    else
    {
      localStorage.setItem('clientid',this.clientid);
    }
    console.log("----------->");
    
    console.log(this.dataUrl);
    
    const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid') }

    this.http.get<any>(this.dataUrl+'/api/custicon',{headers}).subscribe({
      next: async data => {
        this.datapass=data.message[0]; 
        this.datapass.base64encodedimage="data:image/png;base64,"+data.message[0].base64encodedimage;
        localStorage.setItem('brandImage',this.datapass.base64encodedimage);    
      },
      error: errordata => {
        if(errordata.error.message){
        this.toastfunction(errordata.error.message,"danger");  
        }
        else{
          this.toastfunction("Invalid Company Url, Please Check in Home page 1","danger");
        }
      }
    });

console.log(this.dataUrl);

    this.http.get<any>(this.dataUrl+'/api/appversion/plan',{headers}).subscribe({
      next: async data => {
       
        if(this.cversion >= data.message){
          this.versionFlag=false;
          if(localStorage.getItem('userid') != null && localStorage.getItem('password') != null)
          {
            this.router.navigate(["Widgets"]);   
          }
          else
          {
            this.router.navigate(["home"]);
          }
        }
        else{
          this.versionToastFunction();
          this.versionFlag=true;
        }
      },
      error: errordata => {
        if(errordata.error.message){
        this.toastfunction(errordata.error.message,"danger");  
        }
        else{
          this.toastfunction("Invalid Company Url, Please Check in Home page 2","danger");
        }
      }
    });

  }

  
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  textChanged(obj)
  { 
    localStorage.setItem('url', obj);
  }
  
  
  onClickMe(obj) {
    this.router.navigate([obj]);
  }


  async submitData()
  {   
    this.submitted=true;
    
    if (this.registerForm.invalid) {
      return;
    }
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner:'dots'
    });  
    await loading.present();

    // else
    // {

      const headers = { 
        'auth-id': localStorage.getItem('authid'), 
        'client-id': localStorage.getItem('clientid'),
        'user': this.registerForm.value.userid,
        'password':Md5.hashStr(this.registerForm.value.password) }

        let company_id = this.registerForm.value.company_id?.toLowerCase().trim();

        let fullUrl = `https://${company_id}.2pisys.com`;
            
        if (this.dataUrls?.includes(fullUrl)) {
           const storedUrl = localStorage.getItem('url');

            if (storedUrl) {
              this.dataUrl = storedUrl;
            } else {
              this.dataUrl = company_id;
              localStorage.setItem('url', company_id);
            }
        } else {
          this.toastfunction("Invalid Company Id","danger");
           loading.dismiss();  
          return;
        }
        
        
      this.http.get<any>(this.dataUrl+"/api/userlogin/"+this.registerForm.value.userid,{headers}).subscribe({
        next: async data => {
          this.router.navigate(["Widgets"]);
          localStorage.setItem('userid',this.registerForm.value.userid);
          localStorage.setItem('password',Md5.hashStr(this.registerForm.value.password));
          this.setStorage();
          loading.dismiss();          
        },
        error: errordata => {
          if(errordata.error.message){
            loading.dismiss();         
            this.toastfunction(errordata.error.message,"danger");  
            }
            else{
              loading.dismiss();  
              this.toastfunction("Invalid Company Url, Please Check in Home page 3","danger");
            }
        }
      });

    // } 

  }


  expiryDate;
  setStorage() {
    let date = new Date();
    this.expiryDate= date.setDate(date.getDate() + 1); 
    localStorage.setItem("your-data-key", this.expiryDate.toString());
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

  refresher()
  {
   this.ngOnInit();
  }
  
  async versionToastFunction()
  {
    const toast2 = await this.toastController.create({
      header:"Update required",
      message: "A new PPA app is now available. Please update from playstore.",
      position: 'bottom',
      animated:true,
      color:"danger",
      // buttons: [
      //  {
      //     side: 'end',
      //     text: 'Close',
      //     role: 'cancel',
      //     icon:'close',
      //     handler: () => {
      //       console.log('Close clicked');
      //     }
      //   }
      // ]
    });

    toast2.present();
  }

}
