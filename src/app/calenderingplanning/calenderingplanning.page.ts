import { Component, Input, OnInit, ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import {  IonicSelectableComponent } from '@ionic-selectable/angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-calenderingplanning',
  templateUrl: './calenderingplanning.page.html',
  styleUrls: ['./calenderingplanning.page.scss'],
})
export class CalenderingplanningPage implements OnInit {
  brandImage="";
  dataUrl=localStorage.getItem('url');
  tableData=[];
  deleteData=[];
  tableDataTemp=[];
  currentData:any;
  // currentDate=formatDate(new Date, 'yyyy-MM-dd', 'en');
  dataArray=[];
  // locationArray=[];
  postData={
    "plandate": "",
    "shift":null,
    "iteminfo": this.dataArray
  }
  flag=true;
  flag2=true;
  selected:any;
  selectedShift:any;
  modalDeleteData=false;
  modalDeleteData2=false;
  modalDeleteData3=false;
  currentItem:any;
  shiftArray=[]
  planDate:any;
  datePipe: DatePipe = new DatePipe('en-US');
  currentDate:any;
  totalPlanQtyM=0;
  totalPlanQtyKG=0;
  searchData="";

  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
  @ViewChild('selectComponent1') selectComponent1: IonicSelectableComponent;

  constructor(private router: Router,private screenOrientation: ScreenOrientation,public toastController: ToastController,private http: HttpClient,public loadingController: LoadingController) {

    if(localStorage.getItem('userid') == null && localStorage.getItem('password') == null)
    {
      this.router.navigate(["login"]);
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
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  onChangeValueAll(event){
    var items:any = document.querySelectorAll(".direct");

    if(event.detail.checked){
      for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.checked = 'true';
        this.tableData[i].directfinal=1;
        this.tableDataTemp[i].directfinal=1;
      }
    }
    else
    {
      for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.checked = 'false';
        this.tableData[i].directfinal=0;
        this.tableDataTemp[i].directfinal=0;
      }
    }


  }

  onChangeValue(data,index,item,type){
    if(type == "rolllength"){


      // let batchwgt = (parseFloat(data.target.value) * this.tableData[index].cmultiplier) + (parseFloat(data.target.value) * this.tableData[index].fmultiplier);
      // this.tableData[index].planqtyKg = parseFloat(batchwgt.toFixed(1));
      // this.tableData[index].planqty = parseFloat(data.target.value)

      // let batchwgt2 = (parseFloat(data.target.value) * this.tableDataTemp[index].cmultiplier) + (parseFloat(data.target.value) * this.tableDataTemp[index].fmultiplier);
      // this.tableDataTemp[index].planqtyKg = parseFloat(batchwgt2.toFixed(1));
      // this.tableDataTemp[index].planqty = parseFloat(data.target.value)

      if(data.target.value!="NaN" && data.target.value!=""){
        this.totalPlanQtyM=0;
        this.totalPlanQtyKG=0;
        this.tableData.map((x)=>{
          if(x.rollname === item.rollname){
            let batchwgt = (parseFloat(data.target.value) * x.cmultiplier) + (parseFloat(data.target.value) * x.fmultiplier);
            x.planqtyKg = parseFloat(batchwgt.toFixed(1));
            x.planqty = parseFloat(data.target.value)
          }

          if(x.planqty){
            this.totalPlanQtyM+=x.planqty,
            this.totalPlanQtyKG+=x.planqtyKg
          }
        })
      }

      if(data.target.value!="NaN" && data.target.value!=""){
        this.totalPlanQtyM=0;
        this.totalPlanQtyKG=0;
        this.tableDataTemp.map((x)=>{
          if(x.rollname === item.rollname){
            let batchwgt = (parseFloat(data.target.value) * x.cmultiplier) + (parseFloat(data.target.value) * x.fmultiplier);
            x.planqtyKg = parseFloat(batchwgt.toFixed(1));
            x.planqty = parseFloat(data.target.value)
          }

          if(x.planqty){
            this.totalPlanQtyM+=x.planqty,
            this.totalPlanQtyKG+=x.planqtyKg
          }
        })
      }

    }


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

      this.http.get<any>(this.dataUrl+"/api/rollplan",{headers}).subscribe({
        next: async data => {

          for (var key of Object.keys(data.message)) {
            if(key != "locations" && key != "numshifts"){

              data.message[key].cmultiplier=parseFloat(data.message[key].cmultiplier)
              data.message[key].fmultiplier=parseFloat(data.message[key].fmultiplier)
              data.message[key].rollminstock=parseFloat(data.message[key].rollminstock)
              data.message[key].rolltotstock=parseFloat(data.message[key].rolltotstock)
              data.message[key]["planqty"]=0;
              this.tableData.push(data.message[key])
              this.tableDataTemp.push(data.message[key])
            }
            // if(key == "locations"){
            //   data.message["locations"].map((x)=>{
            //     this.locationArray.push({name:x,value:x});
            //   })
            // }

            if(key=="numshifts"){

              for(let i=1;i<=parseInt(data.message[key]);i++){
                this.shiftArray.push({name:i,value:i})
              }

              this.selectedShift=this.shiftArray[0];
              this.postData.shift=parseInt(this.selectedShift.value);
            }



          }
          // if(this.locationArray.length == 1){
          //   this.selected=this.locationArray[0];
          // }

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

  async callPlan(){

    // if(this.postData.location == ""){
    //   this.toastfunction("Please Select Location","danger");
    //   return false;
    // }

    this.modalDeleteData3=true;

    setTimeout(()=>{
      let dd=new Date();
      let ddc=dd.setDate(dd.getDate() + 1)
      let d=this.datePipe.transform(ddc, 'yyyy-MM-dd');
      (document.getElementById("datefield") as HTMLInputElement).value=d;
      // this.planDate=d;
      this.currentDate=d;
      this.postData.plandate=d;
      console.log(d)
    },1000)

  }


  async submitData() {

    // if(this.postData.location == ""){
    //   this.toastfunction("Please Select Location","danger");
    //   return false;
    // }

    this.tableDataTemp.map((x,i)=>{
      if(x.rolllength > 0){
        this.dataArray.push({
          "rollid": x.rollid,
          "planqty": x.planqty
        })
     }
     if(x.rolllength == 0){
        this.dataArray.splice(i,1);
     }

    })
    console.log(this.postData)

    if(this.postData.iteminfo.length == 0){
      this.toastfunction("Please add any 'Roll' to plan","danger");
      return false;
    }

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

    this.http.post<any>(this.dataUrl+'/api/rollplan',this.postData,{headers}).subscribe({
      next: async data => {

        if(data.status == "success")
        {
          loading.dismiss();
          this.toastfunction(data.message,"success");
          this.scan();
          this.tableData=[];
          this.tableDataTemp=[];
          this.dataArray=[];
          // this.locationArray=[];
          this.postData={
            "plandate": this.currentDate,
            "shift":"",
            "iteminfo": this.dataArray
          }
          this.selected=null;
          this.modalDeleteData3=false;
          this.searchData="";
        }
        else
        {
          loading.dismiss();
          this.toastfunction(data.message,"danger");
          this.modalDeleteData3=false;

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

  mode="";
  async deleteList() {

    // if(this.postData.location !=""){
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

      this.http.get<any>(this.dataUrl+'/api/cancelrollplan'+this.mode,{headers}).subscribe({
        next: async data => {

          if(data.status == "success")
          {
            this.deleteData=data.message;
            this.deleteData.map((x)=>{
              return x.planqty=parseFloat(x.planqty),x.cpdretqty=parseFloat(x.cpdretqty)
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
    // }
    // else{
    //   this.toastfunction("Please Select Operator","danger");
    // }

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

      this.http.post<any>(this.dataUrl+'/api/cancelrollplan/'+this.currentItem.planid,"",{headers}).subscribe({
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


  // OperatorChanged(event: {component: IonicSelectableComponent,value: any})
  // {
  //   this.postData["location"]=event.value.name;
  // }

  ShiftChanged(event: any)
  {
    this.postData["shift"]=parseInt(event.name);
  }


  checkStorage() {
    const storage = parseInt(localStorage.getItem("your-data-key"));
    let date = new Date();
    const currentDate = date.setDate(date.getDate()); // Current date in milliseconds

    if (currentDate >= storage) {
      localStorage.removeItem("your-data-key");
      localStorage.removeItem("userid");
      localStorage.removeItem("password");
      this.router.navigate(["login"]);
    }

  }


  navBack()
  {
    this.router.navigate(['login']);
  }

  // selectDate(e){
  //   this.postData["issdate"]=this.currentDate;
  // }

  selectRecord(data,event){

    if(data.noofbatch === ""){
      this.toastfunction("Please Enter Batch Count","danger");
      return false;
    }
    if(event.detail.checked){
       this.dataArray.push({
        "cpdid": data.cpdid,
        "basepolywgt": data.stdbasepolywgt,
        "numbatches":data.noofbatch,
        "isdirectfinal":data.directfinal
       })
    }
    else{
     this.dataArray.map((x,i)=>{
       if(x.moldref === data.moldref){
         this.dataArray.splice(i,1);
       }
     })
    }
     console.log(this.postData)
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
      } else {
        if(filterValue.length >= 3)
        {
          this.tableData = this.tableData.filter((employee) =>
          employee.rollname.toLowerCase().includes(filterValueLower));
        }
    }
 }

 displaymode(){
  // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
 }


 store;
  prefill(index,item,e,type)
  {
    this.store=e.target.value;
    this.tableData[index][type]="";
  }

  blured(index,item,e,type)
  {
    if(e.target.value == "")
    {
      this.tableData[index][type]=this.store;
    }
    else
    {
      if(e.target.type == "number")
      {
        this.tableData[index][type]=parseInt(e.target.value);
      }

      if(e.target.type == "text")
      {
        this.tableData[index][type]=e.target.value;
      }
    }

  }

}
