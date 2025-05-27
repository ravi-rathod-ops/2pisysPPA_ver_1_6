import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { formatDate } from '@angular/common';

import {  IonicSelectableComponent } from '@ionic-selectable/angular';

@Component({
  selector: 'app-deflashplanning',
  templateUrl: './deflashplanning.page.html',
  styleUrls: ['./deflashplanning.page.scss'],
})
export class DeflashplanningPage implements OnInit {

  brandImage="";
  dataUrl=localStorage.getItem('url');
  tableData=[];
  deleteData=[];
  tableDataTemp=[];
  currentData:any;
  // currentDate=formatDate(new Date, 'yyyy-MM-dd', 'en');
  dataArray=[];
  operatorArray=[];
  postData={
    "operator": "",
    // "issdate": "",
    "iteminfo": this.dataArray
  }
  flag=true;
  flag2=true;
  selected:any;
  modalDeleteData=false;
  modalDeleteData2=false;
  modalDeleteData3=false;
  currentItem:any;
  searchData="";
  totalmouldqty=0;

  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;

  constructor(private router: Router,public toastController: ToastController,private http: HttpClient,public loadingController: LoadingController) {

    if(localStorage.getItem('userid') == null && localStorage.getItem('password') == null)
    {
      this.router.navigate(["home"]);
    }

    this.checkStorage();

   }

   sort(colName,flag){

    if(this.flag){
      this.tableData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
      this.flag=false;
      return false;
    }
    if(!this.flag)
    {
      this.tableData=this.tableData.reverse()
      this.flag=true
      return false;
    }
   }

   sort2(colName,flag){

    if(this.flag2){
      this.deleteData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
      this.flag2=false;
      return false;
    }
    if(!this.flag2)
    {
      this.deleteData=this.deleteData.reverse()
      this.flag2=true
      return false;
    }
   }

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    this.scan();
  }

  async scan() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner:'dots'
    });

  const headers = {
    'auth-id': localStorage.getItem('authid'),
    'client-id': localStorage.getItem('clientid'),
    'user': localStorage.getItem('userid'),
    'password':localStorage.getItem('password') }
    
      this.http.get<any>(this.dataUrl+"/api/deflashissue",{headers}).subscribe({
        next: async data => {          
          for (var key of Object.keys(data.message)) {
            if(key != "operators"){
              data.message[key]["check"]=false;
              data.message[key]["mouldqty"]=parseFloat(data.message[key]["mouldqty"]);
              this.tableData.push(data.message[key])
              this.tableDataTemp.push(data.message[key])
            }
            if(key == "operators"){
              data.message["operators"].map((x)=>{
                this.operatorArray.push({name:x,value:x});
              })
            }

          }

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


  async submitData() {
    // if(this.postData.issdate !="" && this.postData.operator !="")

    if(this.dataArray.length == 0){
      this.toastfunction("Please Select any Record","danger");
      this.modalDeleteData3=false;
      return false;
    }

    if(this.postData.operator !=""){

      const headers = {
        'auth-id': localStorage.getItem('authid'),
        'client-id': localStorage.getItem('clientid'),
        'user': localStorage.getItem('userid'),
        'password':localStorage.getItem('password') }

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        spinner:'dots'
      });
      await loading.present();

      this.http.post<any>(this.dataUrl+'/api/deflashissue',this.postData,{headers}).subscribe({
        next: async data => {

          if(data.status == "success")
          {
            loading.dismiss();
            this.toastfunction(data.message,"success");
            this.scan();
            this.tableData=[];
            this.tableDataTemp=[];
            this.dataArray=[];
            this.operatorArray=[];
            this.postData={
              "operator": "",
              // "issdate": "",
              "iteminfo": this.dataArray
            }
            this.selected=null;
            this.searchData="";
            this.modalDeleteData3=false;
            this.totalmouldqty=0;
          }
          else
          {
            loading.dismiss();
            this.toastfunction(data.message,"danger");

          }
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
    else{
      this.toastfunction("Please Select Operator","danger");
      this.modalDeleteData3=false;
    }

  }


  async deleteList() {

    if(this.postData.operator !=""){
      const headers = {
        'auth-id': localStorage.getItem('authid'),
        'client-id': localStorage.getItem('clientid'),
        'user': localStorage.getItem('userid'),
        'password':localStorage.getItem('password') }

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        spinner:'dots'
      });
      await loading.present();

      this.http.get<any>(this.dataUrl+'/api/canceldeflashissue/'+this.postData.operator,{headers}).subscribe({
        next: async data => {

          if(data.status == "success")
          {
            this.deleteData=data.message;
            this.deleteData.map((x)=>{
              return x.issqty=parseFloat(x.issqty)
            })
            this.modalDeleteData=true;
            loading.dismiss();
          }
          else
          {
            loading.dismiss();
            this.modalDeleteData=false;
          }
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
    else{
      this.toastfunction("Please Select Operator","danger");
    }

  }

  async callDeflashing(data){
    this.currentItem=data;
    this.modalDeleteData2=true;
  }

  async deleteDeflashing() {



      const headers = {
        'auth-id': localStorage.getItem('authid'),
        'client-id': localStorage.getItem('clientid'),
        'user': localStorage.getItem('userid'),
        'password':localStorage.getItem('password') }

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        spinner:'dots'
      });

      await loading.present();

      this.http.post<any>(this.dataUrl+'/api/canceldeflashissue',
      {
        "defiss": this.currentItem.defiss,
        "sno": parseInt(this.currentItem.sno),
        "mouldref": this.currentItem.mouldref
      },
    {headers}).subscribe({
        next: async data => {

          if(data.status == "success")
          {
            loading.dismiss();
            this.toastfunction(data.message,"success");
            this.deleteList();
            this.modalDeleteData2=false;
          }
          else
          {
            loading.dismiss();
            this.toastfunction(data.message,"danger");
            this.modalDeleteData2=false;
          }
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


  OperatorChanged(event: any)
  {
    this.postData["operator"]=event.name;
  }


  checkStorage() {
    const storage = parseInt(localStorage.getItem("your-data-key"));
    let date = new Date();
    const currentDate = date.setDate(date.getDate()); // Current date in milliseconds

    if (currentDate >= storage) {
      localStorage.removeItem("your-data-key");
      localStorage.removeItem("userid");
      localStorage.removeItem("password");
      this.router.navigate(["home"]);
    }

  }


  navBack()
  {
    this.router.navigate(['home']);
  }

  // selectDate(e){
  //   this.postData["issdate"]=this.currentDate;
  // }

  selectRecord(data,event,index){

    if(event.detail.checked){
      this.tableData[index].check=true;
      // this.tableDataTemp[index].check=true;
      this.totalmouldqty+=parseFloat(data.mouldqty)
       this.dataArray.push({
         "moldref": data.moldref,
         "planid": data.planid
       })
    }
    else{
      this.tableData[index].check=false;
      // this.tableDataTemp[index].check=false;
     this.dataArray.map((x,i)=>{
       if(x.moldref === data.moldref){
        this.totalmouldqty-=parseFloat(data.mouldqty)
         this.dataArray.splice(i,1);
       }
     })
    }
     this.postData['iteminfo']=this.dataArray;
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


  applyFilter(filterValue: string) {
      let filterValueLower = filterValue.toLowerCase();
      if(filterValue === '' ) {
          this.tableData=this.tableDataTemp;
          // this.dataArray=[];
          // this.postData['iteminfo']=this.dataArray;
          // this.totalmouldqty=0;
          // this.tableData.map((x)=> {
          //   //  if(x.check){
          //   //   this.totalmouldqty+=parseFloat(x.mouldqty)
          //   //  }
          //   return x.check=false;
          //   })
      } else {
        if(filterValue.length >= 3)
        {
           this.tableData = this.tableData.filter((employee) =>
              employee.cmpdname.includes(filterValueLower) ||
              employee.cmpdrefno.toLowerCase().includes(filterValueLower) ||
              employee.planid.toLowerCase().includes(filterValueLower) ||
              employee.mouldqty.toString().includes(filterValueLower));
              // this.dataArray=[];
              // this.postData['iteminfo']=this.dataArray;
              // this.totalmouldqty=0;
              // this.tableData.map((x)=> {
              //   // if(x.check){
              //   //  this.totalmouldqty+=parseFloat(x.mouldqty)
              //   // }

              //   return x.check=false;
              //  })
        }
    }
 }

}
