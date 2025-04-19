import { Component,OnInit, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {  IonInput } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { Camera,CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  planid: any="";
  modaldata:any;
  datapass: any={};
  showEntryCard=false;
  dataUrl=localStorage.getItem('url');
  registerForm: FormGroup;
  submitted = false;
  base64=null;
  url="https://ppa.2pisys.com";
  authid="PXpv2YWV41L223hGDuXY";
  clientid="ppa";
  toggle="false";
  brandImage="";
  socketIp="192.168.1.100:3000";
 
  constructor(private http: HttpClient,public camera:Camera,public loadingController: LoadingController,private screenOrientation: ScreenOrientation,public toastController: ToastController,private router: Router,private formBuilder: FormBuilder) { 
    if(localStorage.getItem('url') != null)
    {
      this.url=localStorage.getItem('url');       
    }
    else
    {
      localStorage.setItem('url',this.url);
    }

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

    if(localStorage.getItem('IPAddr') != null)
    {
      this.socketIp=localStorage.getItem('IPAddr');       
    }
    else
    {
      localStorage.setItem('IPAddr',this.socketIp);
    }


    if(localStorage.getItem('userid') == null && localStorage.getItem('password') == null)
    {
      // this.router.navigate(["home"]);   
    }

  }

  @ViewChild('inputId', {  static: false })  inputElement: IonInput;

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    this.registerForm = this.formBuilder.group({
      url: [this.url, Validators.required],
      auth: [this.authid, Validators.required],
      client: [this.clientid, Validators.required],
      ip:[this.socketIp]
  });
  this.screenOrientation.unlock();

  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  async submitData()
  {   
    const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid') };
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',      
      spinner:'dots'
    });  
    await loading.present();
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    else
    {
     

    } 

  }


  navBack()
  {
    this.router.navigate(['home']);
  }

  modaldismiss()
  {
    this.showEntryCard=false;
    this.registerForm.reset();
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

  textChanged(obj,type)
  { 
    if(type == "url")
    {
      localStorage.setItem('url', obj);
    }

    if(type == "authid")
    {
      localStorage.setItem('authid', obj);
    }

    if(type == "clientid")
    {
      localStorage.setItem('clientid', obj);
    }

    if(type == "ip")
    {
      localStorage.setItem('IPAddr', obj);
    }

    
  }

  logout()
  {
    localStorage.removeItem("userid");
    localStorage.removeItem("password");
    localStorage.removeItem("your-data-key");
    this.router.navigate(["home"]);
  }


  store;
  prefill(data,e)
  {
    this.store=e.target.value;
      this.registerForm.controls[data].setValue('');
  }

  blured(data,e)
  {
    if(e.target.value == "")
    {
      this.registerForm.controls[data].setValue(this.store);
    }
    else 
    {
      if(e.target.type == "number")
      {
        this.registerForm.controls[data].setValue(parseInt(e.target.value));
      }

      if(e.target.type == "text")
      {
        this.registerForm.controls[data].setValue(e.target.value);
      }
      
    }
    
  }
  

}
