import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { IonInput, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { Result } from '@zxing/library';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-compoundapproval',
  templateUrl: './compoundapproval.page.html',
  styleUrls: ['./compoundapproval.page.scss'],
})
export class CompoundapprovalPage implements OnInit {

  
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
//  stream:any = this.video.nativeElement.srcObject as MediaStream;
if (stream) {
  stream.getTracks().forEach(track => track.stop());
  this.video.nativeElement.srcObject = null;
}
@ViewChild('video', { static: false }) video: ElementRef;
isScanModalOpen = false;
codeReader = new BrowserMultiFormatReader();
isMobile: boolean = false;
isVideoReady = false;



  constructor(private http: HttpClient,private screenOrientation: ScreenOrientation,public loadingController: LoadingController,public toastController: ToastController,private router: Router,private formBuilder: FormBuilder) { }
  @ViewChild('inputId')  myInputField;

  

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    this.scan();
    this.registerForm = this.formBuilder.group({
      remarks: [''],
      // pin: ['', Validators.required]
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }


  

  // ================
  async scan() {
  if (!this.isMobile) {
    this.toastfunction('Camera is available only on mobile devices.', 'warning');
    return;
  }
  const devices = await navigator.mediaDevices.enumerateDevices();
  const hasVideoInput = devices.some(device => device.kind === 'videoinput');

  if (!hasVideoInput) {
    this.toastfunction('No camera device found. Please connect a camera.', 'danger');
    return;
  }

  this.isScanModalOpen = true;

      setTimeout(() => {
        this.startScanning();
    }, 100);
    setTimeout(() => {
    this.isVideoReady = true;  
    }, 200);
}

 async startScanning() {
    try {
      const result: Result = await this.codeReader.decodeOnceFromVideoDevice(
    undefined,
        this.video.nativeElement
      );
        const scannedText = result.getText();
        this.planid = scannedText;

      if (scannedText) {
        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          spinner: 'dots'
        });
        await loading.present();

        const headers = {
          'auth-id': localStorage.getItem('authid'),
          'client-id': localStorage.getItem('clientid'),
          'user': localStorage.getItem('userid'),
          'password': localStorage.getItem('password')
        };

        this.http.get<any>(`${this.dataUrl}/api/approvecpd/${scannedText}`, { headers }).subscribe({
          next: async data => {
            this.datapass = data.message;
            this.rmDetails = data.message.paramdata;
            this.showEntryCard = true;
            this.approval("1");
            loading.dismiss();
            this.registerForm.reset();
            this.stopScan();
            setTimeout(() => this.myInputField.setFocus(), 700);
          },
          error: err => {
            loading.dismiss();
            this.showEntryCard = false;
            this.toastfunction(
              err?.error?.message || "Invalid Company Url, Please Check in Home page",
              "danger"
            );
            this.registerForm.reset();
            this.stopScan();
          }
        });
      }
    } catch (err) {
      console.error('Scan error:', err);
      this.toastfunction("Camera access denied or scanning cancelled.", "danger");
      this.stopScan();
    }
}

stopScan() {
    const stream = this.video?.nativeElement?.srcObject as MediaStream;
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
      this.video.nativeElement.srcObject = null;
  }
  this.isScanModalOpen = false;
  this.isVideoReady = false;
}

  closeScanModal() {
    this.stopScan();
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
      this.http.get<any>(this.dataUrl+'/api/approvecpd/'+this.planid,{headers}).subscribe({
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
          "paramref": parseInt(x.paramref),
          "paramval": parseFloat(x.paramval)
        }
      })
      // paramdata.map((x)=>{
      //   if(x.paramval <= 0){
      //     this.toastfunction("Observation should not be 0 or negative","danger");
      //     return;
      //   }
      // })
      const body={
        "batref":parseInt(this.datapass.batref),
        "approval": parseInt(this.isApproved),
        "remarks":this.registerForm.value.remarks == null ? "": this.registerForm.value.remarks,
        // "operatorid": parseInt(this.registerForm.value.pin),
        "paramdata":paramdata
      }; 

      console.log(body)
      this.http.post<any>(this.dataUrl+'/api/approvecpd',body,{headers}).subscribe({
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
    this.router.navigate(['login']);
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
      this.rmDetails[inx].paramval="";
    }
    
  }

  blured(inx,val)
  {
    if(val == "")
    {
      this.rmDetails[inx].paramval=parseFloat(this.store);
    }
    else
    {
      this.rmDetails[inx].paramval=parseFloat(val);
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

  onChangeOnservation(i,val){
    if(parseFloat(val) < 0){this.rmDetails[i].paramval=0; return false;}
    this.rmDetails[i].paramval=val;
  }

}
