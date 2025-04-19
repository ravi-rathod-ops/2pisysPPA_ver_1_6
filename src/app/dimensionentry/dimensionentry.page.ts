import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { IonInput, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-dimensionentry',
  templateUrl: './dimensionentry.page.html',
  styleUrls: ['./dimensionentry.page.scss'],
})
export class DimensionentryPage implements OnInit {

  
  planid: any="";
  modaldata:any;
  datapass: any={};
  showEntryCard=false;
  dataUrl=localStorage.getItem('url');
  registerForm: FormGroup;
  submitted = false;
  brandImage="";
  rmDetails=[];
  isApproved="1";
  flag=false;

  constructor(private http: HttpClient,private screenOrientation: ScreenOrientation,public loadingController: LoadingController,public toastController: ToastController,private router: Router,private formBuilder: FormBuilder) { }
  @ViewChild('inputId')  myInputField;

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    this.scan();
    this.registerForm = this.formBuilder.group({
      remarks: [''],
      // pin: ['', Validators.required]
  });
  this.screenOrientation.unlock();
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
      this.http.get<any>(this.dataUrl+'/api/dimentry/'+data.text,{headers}).subscribe({
        next: async data => {
          this.datapass=data.message;
          this.rmDetails=data.message.paramdata;  
          this.showEntryCard=true;    
          this.approval("1");  
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
      this.http.get<any>(this.dataUrl+'/api/dimentry/'+this.planid,{headers}).subscribe({
        next: async data => {
          this.datapass=data.message;
          this.rmDetails=data.message.paramdata;    
          this.showEntryCard=true; 
          this.approval("1");     
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
    else if(this.isApproved == "0" && (this.registerForm.value.remarks == "" || this.registerForm.value.remarks == null)){
      this.toastfunction("Please Fill Remarks","danger"); 
      loading.dismiss();  
      return;
    }
    else
    {
      let paramdata=this.rmDetails.map((x)=>{
        return {
          "dimref": parseInt(x.dimref),
          "dimval1": parseFloat(x.dimval1),
          "dimval2": parseFloat(x.dimval2),
          "dimval3": parseFloat(x.dimval3),
          "dimval4": parseFloat(x.dimval4),
          "dimval5": parseFloat(x.dimval5),
          "dimval6": parseFloat(x.dimval6),
          "dimval7": parseFloat(x.dimval7),
          "dimval8": parseFloat(x.dimval8),
          "dimval9": parseFloat(x.dimval9),
          "dimval10": parseFloat(x.dimval10)
        }
      })
      // paramdata.map((x)=>{
      //   if(x.paramval <= 0){
      //     this.toastfunction("Observation should not be 0 or negative","danger");
      //     return;
      //   }
      // })
      const body={
        "planid":this.datapass[0].planid,
        "approval": parseInt(this.isApproved),
        "remarks":this.registerForm.value.remarks == null ? "": this.registerForm.value.remarks,
        // "operatorid": parseInt(this.registerForm.value.pin),
        "dimdata":paramdata
      }; 

      this.http.post<any>(this.dataUrl+'/api/dimentry',body,{headers}).subscribe({
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
  prefill(inx,val,prop)
  {
    if(val != ""){
      this.store=val;
      this.rmDetails[inx][prop]="";
    }
    
  }

  blured(inx,val,prop,pos)
  {
    

    if(val == "")
    {
      this.rmDetails[inx][prop]=parseFloat(this.store);
    }
    else
    {
      this.rmDetails[inx][prop]=parseFloat(val);
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

  approval(value)
  {
    if(value == "1"){
      this.isApproved="1";
    }
    if(value == "0"){
      this.isApproved="0";
    }
  }

  onChangeOnservation(i,val,prop){
    if(parseFloat(val) < 0.001){this.rmDetails[i][prop]=0.001; return false;}
    this.rmDetails[i][prop]=val;
  }

}
