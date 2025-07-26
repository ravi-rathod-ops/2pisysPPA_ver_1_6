import { Component, Input, OnInit, ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import {  IonicSelectableComponent } from '@ionic-selectable/angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-mixingplanning',
  templateUrl: './mixingplanning.page.html',
  styleUrls: ['./mixingplanning.page.scss'],
})
export class MixingplanningPage implements OnInit {

  brandImage="";
  dataUrl=localStorage.getItem('url');
  tableData=[];
  deleteData=[];
  tableDataTemp=[];
  currentData:any;
  // currentDate=formatDate(new Date, 'yyyy-MM-dd', 'en');
  dataArray=[];
  locationArray=[];
  postData={
    "mixdate": "",
    "location": "",
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
  totalpolywgt=0;
  totalbatchwgt=0;
  totalbatch:number=0;
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
      }
    }
    else
    {
      for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.checked = 'false';
        this.tableData[i].directfinal=0;
      }
    }


  }

  onChangeValue(data,index,item,type){
    if(type == "weight"){
      let batchwgt = (item.batchtotwgt * parseFloat(data.target.value) * item.basepolyratio)/item.polywgt;

      this.tableData.map((x)=>{
        if(x.cpdname === item.cpdname){
          x.batchwgt = parseFloat(batchwgt.toFixed(3));
          x.stdbasepolywgt = parseFloat(data.target.value);
        }
      })

      this.tableDataTemp.map((x)=>{
        if(x.cpdname === item.cpdname){
          x.batchwgt = parseFloat(batchwgt.toFixed(3));
          x.stdbasepolywgt = parseFloat(data.target.value);
        }
      })

      // this.tableData[index].batchwgt = parseFloat(batchwgt.toFixed(3));
      // this.tableData[index].stdbasepolywgt = parseFloat(data.target.value);

      // this.tableDataTemp[index].batchwgt = parseFloat(batchwgt.toFixed(3));
      // this.tableDataTemp[index].stdbasepolywgt = parseFloat(data.target.value);
    }
    if(type == "batch")
    {
      // this.tableData[index].noofbatch = parseInt(data.target.value);
      // this.tableDataTemp[index].noofbatch = parseInt(data.target.value);
      if(data.target.value!="NaN" && data.target.value!=""){
        this.totalbatch=0;
        this.tableData.map((x)=>{
          if(x.cpdname === item.cpdname){
            x.noofbatch =parseInt(data.target.value);
          }
          this.totalbatch+=x.noofbatch
        })
      }

      if(data.target.value!="NaN" && data.target.value!=""){
        this.totalbatch=0;
        this.tableDataTemp.map((x)=>{
          if(x.cpdname === item.cpdname){
            x.noofbatch =parseInt(data.target.value);
          }
          this.totalbatch+=x.noofbatch
        })
      }

    }
    if(type == "directfinal")
    {
      this.tableData[index].directfinal = data.detail.checked ? 1 : 0;

      this.tableDataTemp[index].directfinal = data.detail.checked ? 1 : 0;
    }

  }

  async scan() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner:'dots'
    });
    await loading.present();
  const headers = {
    'auth-id': localStorage.getItem('authid'),
    'client-id': localStorage.getItem('clientid'),
    'user': localStorage.getItem('userid'),
    'password':localStorage.getItem('password') }

      this.http.get<any>(this.dataUrl+"/api/mixplan",{headers}).subscribe({
        next: async data => {
          // data.message["locations"]=["2PI"]
          for (var key of Object.keys(data.message)) {
            if(key != "locations" && key != "numshifts"){

              data.message[key].basepolyratio=parseFloat(data.message[key].basepolyratio)
              data.message[key].batchtotwgt=parseFloat(data.message[key].batchtotwgt)
              data.message[key].batchwgt=parseFloat(data.message[key].batchwgt)
              data.message[key].polywgt=parseFloat(data.message[key].polywgt)
              data.message[key].stdbasepolywgt=parseFloat(data.message[key].stdbasepolywgt)
              data.message[key].directfinal=1;
              data.message[key].noofbatch=0;

              this.totalpolywgt+=data.message[key].stdbasepolywgt;
              this.totalbatchwgt+=data.message[key].batchwgt;

              this.tableData.push(data.message[key])
              this.tableDataTemp.push(data.message[key])
            }
            if(key == "locations"){
              // if(data.message["locations"].length == 1){
              //   this.selected={name:data.message["locations"][0],value:data.message["locations"][0]};
              //   this.postData["location"]=data.message["locations"][0];
              // }
              // else{
                data.message["locations"].map((x)=>{
                  this.locationArray.push({name:x,value:x});
                })
              // }

            }

            if(key=="numshifts"){

              for(let i=1;i<=parseInt(data.message[key]);i++){
                this.shiftArray.push({name:i,value:i})
              }

              this.selectedShift=this.shiftArray[0];
              this.postData.shift=parseInt(this.selectedShift.value);
            }



          }
          if(this.locationArray.length == 1){
            this.selected=this.locationArray[0];
            this.postData["location"]=this.locationArray[0].name;
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
      this.postData.mixdate=d;
      console.log(d)
    },1000)

  }


  async submitData() {

    if(this.postData.location == ""){
      this.toastfunction("Please Select Location","danger");
      return false;
    }



    this.tableDataTemp.map((x)=>{
      if(x.noofbatch > 0){
        this.dataArray.push({
          "cpdid": x.cpdid,
          "basepolywgt": x.stdbasepolywgt,
          "numbatches":x.noofbatch,
          "isdirectfinal":x.directfinal
        })
     }
    })

    if(this.postData.iteminfo.length <= 0){
      this.toastfunction("Please put any batches","danger");
      return false;
    }

    console.log(this.postData)

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

      this.http.post<any>(this.dataUrl+'/api/mixplan',this.postData,{headers}).subscribe({
        next: async data => {

          if(data.status == "success")
          {
            loading.dismiss();
            this.toastfunction(data.message,"success");
            this.scan();
            this.tableData=[];
            this.tableDataTemp=[];
            this.dataArray=[];
            this.locationArray=[];
            this.postData={
              "mixdate": this.currentDate,
              "location": "",
              "shift":"",
              "iteminfo": this.dataArray
            }
            this.selected=null;
            this.modalDeleteData3=false;
            this.totalbatch=0;
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
      // this.dataUrl+'/api/cancelmixplan'+this.mode+this.postData.location
      this.http.get<any>(this.dataUrl+'/api/cancelmixplan'+this.mode,{headers}).subscribe({
        next: async data => {

          if(data.status == "success")
          {
            this.deleteData=data.message;
            this.deleteData.map((x)=>{
              return x.planqty=parseFloat(x.planqty)
            })
            this.modalDeleteData=true;
            loading.dismiss();
          }
          else
          {
            loading.dismiss();
            this.modalDeleteData=true;
          }
        },
        error: errordata => {
          if(errordata.error.message){
            loading.dismiss();
            // this.toastfunction(errordata.error.message,"danger");
            this.modalDeleteData=true;
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

      this.http.post<any>(this.dataUrl+'/api/cancelmixplan/'+this.currentItem.batid,"",{headers}).subscribe({
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
    this.postData["location"]=event.name;
  }

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
          employee.cpdname.toLowerCase().includes(filterValueLower));
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
