import { Component, Input, OnInit, ViewChild,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {  IonInput } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-purchaseorderapproval',
  templateUrl: './purchaseorderapproval.page.html',
  styleUrls: ['./purchaseorderapproval.page.scss']
})
export class PurchaseorderapprovalComponent implements OnInit {
brandImage="";
  dataUrl=localStorage.getItem('url');
  datapass: any={};
  rmArray=[];
  rmArray2=[];
  rmArrayTemp=[];
  poDetails=[];
  showEntryCard=false;
  registerForm: FormGroup;
  loc: any;
  purArray:any;
  dataArray:any;
  tcIsAvaiable=1;
  tcfile=null;
  invfile=null;
  isApproved="1";
  currentRecord;
  searchData="";
  flag=true;
  inputId: any;

  constructor(private http: HttpClient,public loadingController: LoadingController,private screenOrientation: ScreenOrientation,public toastController: ToastController,private router: Router,private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    this.getData();
    this.registerForm = this.formBuilder.group({
       remarks: [''],
  });

  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
   
  async getData() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner:'dots'
    });
      await loading.present();
      const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'),'user': localStorage.getItem('userid'),
      'password':localStorage.getItem('password') }
      this.http.get<any>(this.dataUrl+'/api/approvepo',{headers}).subscribe({
        next: async data => {   
          this.rmArray=data.message;
          this.rmArray2=data.message;
          this.rmArrayTemp=data.message;
          loading.dismiss();
        },
        error: errordata => {
          if(errordata.error.message){
          loading.dismiss();                   
          this.toastfunction(errordata.error.message,"danger");  
          }
          else{
            this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
          }         
        }
      });
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

    async submitData()
    {   
      const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'),'user': localStorage.getItem('userid'),
      'password':localStorage.getItem('password') };
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        spinner:'dots'
      });  
      await loading.present();
    
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
         
      const body={
        "purid":this.currentRecord.purid,
        "approval": parseInt(this.isApproved),
        "remarks":this.registerForm.value.remarks == null ? "": this.registerForm.value.remarks,
      }; 

      this.http.post<any>(this.dataUrl+'/api/approvepo',body,{headers}).subscribe({
        next: async data => {
          
          if(data.status == "success")
          { 
            loading.dismiss(); 
            this.toastfunction(data.message,"success");         
            this.showEntryCard=false;
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
  
    async itemDetail(item)
    {
      
      this.tcfile="";
      this.invfile=""; 
      this.isApproved="1";
      this.currentRecord=item;    
      this.registerForm.reset();
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        spinner:'dots'
      });
        await loading.present();
        const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'),'user': localStorage.getItem('userid'),
        'password':localStorage.getItem('password') }
  
        this.http.get<any>(this.dataUrl+'/api/approvepo/'+item.purid,{headers}).subscribe({
          next: async data => {   
            this.poDetails=data.message;
            this.tcRef("1");
            this.approval("1");
            this.showEntryCard=true; 
            loading.dismiss();         
          },
          error: errordata => {
            if(errordata.error.message){
            loading.dismiss();                   
            this.toastfunction(errordata.error.message,"danger");  
            }
            else{
              this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
            }         
          }
        });
    }

    store;
    prefill(inx,val)
    {
      if(val != ""){
        this.store=val;
        this.poDetails[inx].paramval="";
      } 
    }

    modaldismiss()
    {
      this.showEntryCard=false;
      this.registerForm.reset();     
    }
  
   blured(inx,val)
  {
    if(val == "")
    {
      this.poDetails[inx].paramval=parseFloat(this.store);
    }
    else
    {
      this.poDetails[inx].paramval=parseFloat(val);
    }
  }

    tcRef(value)
    {
      if(value == "1"){
        this.tcIsAvaiable=1;
      }
      if(value == "0"){
        this.tcIsAvaiable=0;
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

    filesel(event,type)
    {
      if(type=="inv"){
        this.invfile=event.target.files[0];
      }
      if(type=="tc"){
        this.tcfile=event.target.files[0];
      } 
    }

    onChangeOnservation(i,val){
      if(parseFloat(val) < 0){this.poDetails[i].paramval=0; return false;}
      this.poDetails[i].paramval=val;
    }

    formatDate(date) {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear()+1;
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
    }

    applyFilter(filterValue: string) {
      
    
      let filterValueLower = filterValue.toLowerCase();
      if(filterValue === '' ) {
          this.rmArray=this.rmArray2;
      } else 
      {
        if(filterValue.length >= 3)
        {
            this.rmArray = this.rmArrayTemp.filter((employee) => 
            employee.purid.toLowerCase().includes(filterValueLower) || 
            employee.purdate.toLowerCase().includes(filterValueLower) || 
            employee.supname.toLowerCase().includes(filterValueLower) ||                       
            employee.ramname.toLowerCase().includes(filterValueLower) ||
            employee.qty.toLowerCase().includes(filterValueLower) ||
            employee.rate.toLowerCase().includes(filterValueLower) ||
            employee.purgrandtotal.toLowerCase().includes(filterValueLower)
            );
        }
      }
    
    }

    sort(colName,flag){
    
      if(this.flag){
        this.rmArray.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)  
        this.flag=false;
        return false;   
      }
      if(!this.flag)
      {
        this.rmArray=this.rmArray.reverse() 
        this.flag=true
        return false;      
      }
     }
}
