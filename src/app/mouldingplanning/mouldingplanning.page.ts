import { Component, Input, OnInit, ViewChild,ElementRef,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import {  IonicSelectableComponent } from '@ionic-selectable/angular';


@Component({
  selector: 'app-mouldingplanning',
  templateUrl: './mouldingplanning.page.html',
  styleUrls: ['./mouldingplanning.page.scss'],
})
export class MouldingplanningPage implements OnInit {

  brandImage="";
  dataUrl=localStorage.getItem('url');
  tableData=[];
  deleteData=[];
  currentData:any;
  dataArray=[];
  postData={
    "plandate": "",
    "location":"",
    "iteminfo": this.dataArray
  }
  flag;
  flag2=true;
  selected="";
  selectedLocation:any;
  selectedComponent:any;
  modalDeleteData=false;
  modalDeleteData2=false;
  modalDeleteData3=false;
  modalDeleteData4=false;
  modalDeleteData5=false;
  currentItem:any;
  customerArray=[]
  planDate:any;
  datePipe: DatePipe = new DatePipe('en-US');
  currentDate:any;
  mode=false;
  componentArray=[]
  modalObj={};
  dinum="";
  diqty=null;
  type=true;
  setDisabled=true;
  expOutput:any;
  // shiftArray=[{name:"1",value:1},{name:"2",value:2},{name:"3",value:3}]
  shiftArray=[]
  machineArray=[];

  totalActivities=0;
  totalPlanlift=0;
  totalExpqty=0;
  totalShift=0;
  totalMachine=0;
  stockName="";

  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
  @ViewChild('selectComponent1') selectComponent1: IonicSelectableComponent;
  // @ViewChild('selectComponent') selectComponent2: IonicSelectableComponent;
  // @ViewChild('selectComponent1') selectComponent3: IonicSelectableComponent;
  base64: any;
  locationArray=[];

  constructor(private router: Router,public toastController: ToastController,private http: HttpClient,public loadingController: LoadingController) {

    this.type=true;

    if(localStorage.getItem('userid') == null && localStorage.getItem('password') == null)
    {
      this.router.navigate(["home"]);
    }

    this.checkStorage();
    setTimeout(()=>{
      let dd=new Date();
      let ddc=dd.setDate(dd.getDate())
      let d=this.datePipe.transform(ddc, 'yyyy-MM-dd');
      (document.getElementById("datefield") as HTMLInputElement).value=d;
      // this.planDate=d;
      this.currentDate=d;
      this.postData.plandate=d;
      console.log(d)
    },1000)

   }

   changeData(event){
    this.postData.plandate=event.target.value;
    this.currentDate=event.target.value;
    this.OperatorChanged(event,"date")
    console.log(event.target.value)
   }

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    this.scan();
  }

  addRow(){

    if(this.selectedLocation === "" || this.selectedLocation == undefined){
      this.toastfunction("Please Select Location","danger");
    }
    else
    {
      this.selectedComponent="";
      this.tableData.push({
        "tool_ref": "",
        "no_of_active_cavities":0,
        "std_lifts_per_plan":0,
        "numlifts": 0,
        "numshifts": 0,
        "mcid ": "",
        "expOutput":0,
        "machineArray":[]
    })

    }

  }

  deleteItem(index){
    this.expOutput="";
    this.tableData.splice(index,1)
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

      this.http.get<any>(this.dataUrl+"/api/mouldplan",{headers}).subscribe({
        next: async data => {

              data.message["locations"].map((x)=>{
                this.locationArray.push({name:x,value:x});
              })

              for (var [key,value] of Object.entries(data.message["components"])){
                this.componentArray.push({name:`${value}`,value:`${key}`});
              }

              // console.log(this.componentArray)
          if(this.locationArray.length == 1){
            this.selected=this.locationArray[0];
            this.selectedLocation=this.locationArray[0].value;
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

  async validateError()
  {
    this.flag=1
    this.tableData.map((x)=>{
      if(x.numlifts <= 0){
        this.toastfunction("Plan Lift Should not Zero or Negative","danger");
        this.flag=0;
        return false;
      }

      if(x.numshifts == undefined || x.numshifts == null || x.numshifts == ""){
        this.toastfunction("Please Select Shift","danger");
        this.flag=0;
        return false;
      }

      if(x.need_machine === "1"){
        if(x.mcid  == undefined || x.mcid  == null || x.mcid  == ""){
          this.toastfunction("Please Select Machine","danger");
          this.flag=0;
          return false;
        }
      }


    })

    if(this.flag > 0){
      this.modalDeleteData4=true;
     }

  }

  async submitData() {


          this.modalDeleteData4=false;
          this.postData.location=this.selectedLocation;
          this.postData.iteminfo=this.tableData;

          console.log(this.postData)

          // this.selectedLocation="";

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

          this.http.post<any>(this.dataUrl+'/api/mouldplan',this.postData,{headers}).subscribe({
            next: async data => {

              if(data.status == "success")
              {
                loading.dismiss();
                this.toastfunction(data.message,"success");
                this.scan();
                this.tableData=[];
                this.dataArray=[];
                this.machineArray=[];
                this.locationArray=[];
                this.componentArray=[];
                this.selected="";
                this.selectedLocation="";
                this.expOutput="";
                this.totalPlanlift=0;
                this.totalExpqty=0;
                this.totalShift=0;
                this.totalMachine=0;
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


  async OperatorChanged(event:any,type)
  {
    if(type=="location"){this.selectedLocation=event.value;}

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


      this.http.get<any>(this.dataUrl+"/api/mouldplan/planlist/"+this.selectedLocation+"/"+this.currentDate,{headers}).subscribe({
        next: async data => {
          this.tableData=[];
          if(Array.isArray(data.message)){
            this.tableData=data.message;
            this.tableData.map((x,index)=>{
              x["std_lifts_per_plan"]=x.plannedlifts;
              x["expOutput"]=x.planqty;
              x["no_of_active_cavities"]=x.planqty/x.plannedlifts;
              x["numshifts"]=parseInt(x.numshifts);
              x["numlifts"]=parseInt(x.std_lifts_per_plan);
              x["maxshift"]=parseInt(x.numshifts);
              this.machineArray.push({name:x.mcref,value:x.mcid})
              x["machineArray"]=this.machineArray;
              x["mcid"]=x["machineArray"][0].value;
              this.machineArray=[];
              let samp=this.componentArray.filter((d)=>{ return d.name === x.cmpdname})
              x["bind"]=samp[0];

            })
          }
          else{
            loading.dismiss();
            this.toastfunction(data.message,"danger");
          }
          // this.tableData=data.message;
          // this.sampleArray=data.message;
          // data.message.map((x)=>{
          //   this.componentArray.push({name:x.cmpdname,value:x.cmpdid});
          // })
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

  async onChangeValue(event: any,indexs){
    this.selectedComponent=event.value;
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


      this.http.get<any>(this.dataUrl+"/api/mouldplan/toollist/"+this.selectedLocation+"/"+this.selectedComponent,{headers}).subscribe({
        next: async data => {

          this.selectedComponent=event;
          this.stockName=event.name;
          this.machineArray=[];
          this.shiftArray=[];
          for(let i=1;i<Object.keys(data.message).length-1;i++){
              this.tableData.push({
                "tool_ref": "",
                "no_of_active_cavities":0,
                "std_lifts_per_plan":0,
                "numlifts": 0,
                "numshifts": 0,
                "mcid ": "",
                "expOutput":0,
                "machineArray":[]
              })
          }

          for (var index of Object.keys(data.message)) {
            if(index != "stocklevel"){
              this.tableData[indexs+parseInt(index)]=data.message[index];
              this.tableData[indexs+parseInt(index)]["bind"]=event;
              this.tableData[indexs+parseInt(index)].no_of_active_cavities=parseFloat(this.tableData[indexs+parseInt(index)].no_of_active_cavities)
              this.tableData[indexs+parseInt(index)].std_lifts_per_plan=parseFloat(this.tableData[indexs+parseInt(index)].std_lifts_per_plan)
              this.tableData[indexs+parseInt(index)].expOutput=this.tableData[indexs+parseInt(index)].no_of_active_cavities * this.tableData[indexs+parseInt(index)].std_lifts_per_plan;
              this.tableData[indexs+parseInt(index)].numshifts=parseInt(this.tableData[indexs+parseInt(index)].maxshift);
              this.tableData[indexs+parseInt(index)]["numlifts"]=parseInt(this.tableData[indexs+parseInt(index)].std_lifts_per_plan);
              // this.tableData[indexs]["numshifts"]=parseInt(this.tableData[indexs]["numshifts"]);

              for(let i=1;i<=this.tableData[indexs+parseInt(index)]["numshifts"];i++){
                  this.shiftArray.push(i);
              }
              this.tableData[indexs+parseInt(index)]["shiftArray"]=this.shiftArray;
              this.shiftArray=[];
              let machinetemp = data.message[index].machines;
              let machinetemp2 = machinetemp.split(",")
              machinetemp2.map((x)=>{
                let temp = x.split(":");
                this.machineArray.push({name:temp[1],value:temp[0]})
              })
              const uniqueIds = [];
              const unique = this.machineArray.filter(element => {
                const isDuplicate = uniqueIds.includes(element.name);
                if (!isDuplicate) {
                  uniqueIds.push(element.name);
                  return true;
                }
                return false;
              });
              this.tableData[indexs+parseInt(index)]["machineArray"]=unique;
              this.tableData[indexs+parseInt(index)]["mcid"]=unique[0].value;////
            }}

          this.modalObj=data.message["stocklevel"];
          if(this.modalObj != null ){
            this.modalDeleteData=true;
          }
          this.totalActivities=0;
          this.totalPlanlift=0;
          this.totalExpqty=0;
          this.totalShift=0;
          this.totalMachine=0;
          let dump=[];
          this.tableData.map((x)=>{
            this.totalActivities+=x.no_of_active_cavities;
            this.totalPlanlift+=x.numlifts;
            this.totalExpqty+=x.expOutput;
            this.totalShift+=x.numshifts;
            dump.push(x.mcid)
          })
          dump=dump.filter((value, index, array) => array.indexOf(value) === index);
          this.totalMachine=dump.length;
          loading.dismiss();
        },
        error: errordata => {
          if(errordata.error.message){
            loading.dismiss();

          this.tableData[indexs]={
            "tool_ref": "",
            "no_of_active_cavities":0,
            "std_lifts_per_plan":0,
            "numlifts": 0,
            "numshifts": 0,
            "mcid ": "",
            "expOutput":0,
            "machineArray":[]
        }
          this.shiftArray=[];
          this.machineArray=[];

            this.toastfunction(errordata.error.message,"danger");
            }
            else{
              this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
            }
        }
      });
  }

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

      this.http.get<any>(this.dataUrl+'/api/cancelmouldplan/'+this.selectedLocation,{headers}).subscribe({
        next: async data => {

          if(data.status == "success")
          {

            this.deleteData=data.message;
            this.deleteData.map((x)=>{
              return x.liftplanned=parseFloat(x.liftplanned),x.cpdretqty=parseFloat(x.cpdretqty)
            })

            this.modalDeleteData3=true;
            loading.dismiss();
          }
          else
          {
            loading.dismiss();
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
    // }
    // else{
    //   this.toastfunction("Please Select Operator","danger");
    // }

  }

  clearAll(){
    this.tableData=[];
    this.expOutput="";
    this.selectedComponent="";
    this.modalDeleteData5=false;
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

    this.http.post<any>(this.dataUrl+'/api/cancelmouldplan/'+this.currentItem.planid,"",{headers}).subscribe({
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

async OperatorChanged2(event: {component: IonicSelectableComponent,value: any})
{
  this.selectedLocation=event.value.value;

  this.deleteList();
}

changePlanlifts(lift,index){

  if((parseInt(lift)+(parseInt(this.tableData[index].lifts_run))) <  parseInt(this.tableData[index].next_validation)){
    this.tableData[index].expOutput=parseInt(lift) * parseInt(this.tableData[index].no_of_active_cavities);
    this.tableData[index].numlifts=parseInt(lift);
  }
  else{
    this.tableData[index].std_lifts_per_plan=parseInt(this.tableData[index].next_validation);
    this.toastfunction("Lifts Planned + Lifts Run on this Tool is greater than the next validation due lifts","danger");
    return false;
  }

          this.totalActivities=0;
          this.totalPlanlift=0;
          this.totalExpqty=0;

          this.tableData.map((x)=>{
            this.totalActivities+=x.no_of_active_cavities;
            this.totalPlanlift+=x.numlifts;
            this.totalExpqty+=x.expOutput;
            // this.totalShift+=x.numshifts;
          })
}

changeshift(event,index){
  // this.tableData[index].numshifts=parseInt(event.value.value);
  this.tableData[index].numshifts=parseInt(event);
  this.totalShift=0;
  this.tableData.map((x)=>{
    this.totalShift+=x.numshifts;
  })
}

changeMachine(event,index){
  // this.tableData[index].mcid=event.value.value;
  this.tableData[index].mcid=event;
  this.totalMachine=0;
  let dump=[];
  this.tableData.map((x)=>{
    dump.push(x.mcid)
  })
  dump=dump.filter((value, index, array) => array.indexOf(value) === index);
  this.totalMachine=dump.length;
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

  flag1=true
  sort(colName,flag){

    if(this.flag1){
      this.tableData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
      this.flag1=false;
      return false;
    }
    if(!this.flag1)
    {
      this.tableData=this.tableData.reverse()
      this.flag1=true
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

}
