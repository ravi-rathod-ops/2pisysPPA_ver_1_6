import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { IonInput, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { zip } from 'rxjs';

@Component({
  selector: 'app-stockadjustment',
  templateUrl: './stockadjustment.page.html',
  styleUrls: ['./stockadjustment.page.scss'],
})
export class StockadjustmentPage implements OnInit {

  planid: any="";
  modaldata:any;
  datapass=[];
  showEntryCard=false;
  dataUrl=localStorage.getItem('url');
  registerForm: FormGroup;
  submitted = false;
  brandImage="";
  // rmDetails=[];
  isApproved="1";
  itemType="roll";

  constructor(private http: HttpClient,private screenOrientation: ScreenOrientation,public loadingController: LoadingController,public toastController: ToastController,private router: Router,private formBuilder: FormBuilder) { }
  @ViewChild('inputId')  myInputField;

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    // this.scan();
    this.registerForm = this.formBuilder.group({
      remarks: ['',Validators.required],
      // pin: ['', Validators.required]
  });
  // this.screenOrientation.unlock();
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  async scan() {
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
      const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'),'user': localStorage.getItem('userid'),
      'password':localStorage.getItem('password') }

      this.http.get<any>(this.dataUrl+'/api/stockadjust/'+this.itemType+'/'+data.text,{headers}).subscribe({
        next: async data => {
          this.datapass=data.message;  
          this.datapass.map((x)=>{
            x["phyqty"]=x.bookqty;
          })
          // this.rmDetails=data.message.paramdata;
          this.showEntryCard=true;      
          loading.dismiss();    
          this.registerForm.reset();
          setTimeout(() => {
            this.myInputField.setFocus();
          },700);
        },
        error: errordata => {
          if(errordata.error.message){
          loading.dismiss();         
          this.showEntryCard=false;
          this.toastfunction(errordata.error.message,"danger");  
          }
          else{
            this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
          }
          this.registerForm.reset();
        }
      });

    }
   
  }

  async sendData()
  {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000,
      spinner:'dots'
    });
    
    if(this.planid.length > 0)
    {
      await loading.present();
      const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'),'user': localStorage.getItem('userid'),
      'password':localStorage.getItem('password') }
      this.http.get<any>(this.dataUrl+'/api/stockadjust/'+this.itemType+'/'+this.planid,{headers}).subscribe({
        next: async data => {
          this.datapass=data.message; 
          this.datapass.map((x)=>{
            x["phyqty"]=x.bookqty;
          }) 
          // this.rmDetails=data.message.paramdata;
          this.showEntryCard=true;      
          loading.dismiss();    
          this.registerForm.reset();
          setTimeout(() => {
            this.myInputField.setFocus();
          },700);
        },
        error: errordata => {
          if(errordata.error.message){
          loading.dismiss();         
          this.showEntryCard=false;
          this.toastfunction(errordata.error.message,"danger");  
          }
          else{
            this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
          }
          this.registerForm.reset();
        }
      });
    }
    
  }


  async submitData()
  {   
    const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'),'user': localStorage.getItem('userid'),
    'password':localStorage.getItem('password') };
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000,
      spinner:'dots'
    });  
    await loading.present();
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    else
    {
      let paramdata=[];
      this.datapass.map((x)=>{
        if(x.bookqty != x.phyqty){
           paramdata.push({
            "itemref": x.itemref,
            "phyqty": x.phyqty
          })
        }
      })

      const body={
        "itemtype": this.itemType,
        "remarks":this.registerForm.value.remarks,
        // "operatorid": parseInt(this.registerForm.value.pin),
        "iteminfo":paramdata
      }; 

      this.http.post<any>(this.dataUrl+'/api/stockadjust',body,{headers}).subscribe({
        next: async data => {
          
          if(data.status == "success")
          { 
            loading.dismiss(); 
            this.toastfunction(data.message,"success");         
            this.showEntryCard=false;
            this.planid="";
            this.registerForm.reset();
          }
          else
          { 
            loading.dismiss(); 
            this.toastfunction(data.message,"danger");           
            this.showEntryCard=true;
          }              
        },
        error: errordata => {
          if(errordata.error.message){
            loading.dismiss();         
            this.showEntryCard=true;
            this.toastfunction(errordata.error.message,"danger");  
            }
            else{
              this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
            }
        }
      });

    } 

  }


  modaldismiss()
  {
    this.showEntryCard=false;
    this.registerForm.reset();
  }

  navBack()
  {
    this.router.navigate(['home']);
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

  store;
  prefill(inx,val)
  {
    if(val != ""){
      this.store=val;
      this.datapass[inx].phyqty="";
    }
    
  }

  blured(inx,val)
  {
    if(val == "")
    {
      this.datapass[inx].phyqty=parseFloat(this.store);
    }
    else
    {
      this.datapass[inx].phyqty=parseFloat(val);
    }
  }

  approval(value)
  {
    if(value.detail.value == "1"){
      this.isApproved="1";
    }
    if(value.detail.value == "0"){
      this.isApproved="0";
    }
  }

  onChangeOnservation(i,val){
    if(parseFloat(val) < 0){this.datapass[i].phyqty=0; return false;}
    this.datapass[i].phyqty=parseFloat(val);
  }


}
