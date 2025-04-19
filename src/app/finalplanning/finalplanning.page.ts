import { Component, Input, OnInit, ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {  IonicSelectableComponent } from 'ionic-selectable';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-finalplanning',
  templateUrl: './finalplanning.page.html',
  styleUrls: ['./finalplanning.page.scss'],
})
export class FinalplanningPage implements OnInit {

  brandImage="";
  dataUrl=localStorage.getItem('url');
  tableData=[];
  deleteData=[];
  tableDataTemp=[];
  currentData:any;  
  dataArray=[];
  locationArray=[];
  postData={
    "plandate": "",
    "location": "",
    "shift":null,
    "iteminfo": this.dataArray
  }
  flag=true;
  selected:any;
  selectedShift:any;
  modalDeleteData=false; 
  modalDeleteData3=false;
  currentItem:any;
  shiftArray=[]
  planDate:any;
  datePipe: DatePipe = new DatePipe('en-US');
  currentDate:any;
  totalmasterbatchwgt=0;
  totalexpectedbatchwgt=0;
  searchData="";
  
  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
  @ViewChild('selectComponent1') selectComponent1: IonicSelectableComponent;

  constructor(private router: Router,private screenOrientation: ScreenOrientation,public toastController: ToastController,private http: HttpClient,public loadingController: LoadingController) {

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

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    this.scan();
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  async scan() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner:'dots'
    });
    loading.present();
    
    const headers = { 
      'auth-id': localStorage.getItem('authid'), 
      'client-id': localStorage.getItem('clientid'),
      'user': localStorage.getItem('userid'),
      'password':localStorage.getItem('password') }

      this.http.get<any>(this.dataUrl+"/api/finalplan",{headers}).subscribe({
        next: async data => {

          for (var key of Object.keys(data.message)) {
            if(key != "locations" && key != "numshifts"){
              data.message[key]["check"]=false;  
              data.message[key].basepolyratio=parseFloat(data.message[key].basepolyratio)
              data.message[key].batchtotwgt=parseFloat(data.message[key].batchtotwgt)
              data.message[key].batchwgt=parseFloat(data.message[key].batchwgt)
              data.message[key].polywgt=parseFloat(data.message[key].polywgt)
              data.message[key].stdbasepolywgt=parseFloat(data.message[key].stdbasepolywgt)
              data.message[key].directfinal=1;
              data.message[key].noofbatch=0;
             

              // this.tableData.push(data.message[key])
              this.tableDataTemp.push(data.message[key])              
            }
            if(key == "locations"){              
              // if(data.message["locations"].length == 1){
              //   this.totalmasterbatchwgt=0;
              //   this.totalexpectedbatchwgt=0;
              //   this.dataArray=[];
              //   this.postData["location"]=data.message["locations"][0];
              //   this.tableData=this.tableDataTemp.filter((x)=>{
              //     return x.location === data.message["locations"][0];
              //   })  
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
            this.totalmasterbatchwgt=0;
            this.totalexpectedbatchwgt=0;
            this.dataArray=[];
            this.selected=this.locationArray[0];
            this.postData["location"]=this.locationArray[0].name;
            this.tableData=this.tableDataTemp.filter((x)=>{
              return x.location === data.message["locations"][0];
            })  

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

    if(this.postData.location == ""){
      this.toastfunction("Please Select Location","danger");  
      return false;
    }

    if(this.postData.iteminfo.length == 0){
      this.toastfunction("Please select any plan","danger");
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
      
      this.http.post<any>(this.dataUrl+'/api/finalplan',this.postData,{headers}).subscribe({
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
              "plandate": this.currentDate,
              "location": "",
              "shift":"",
              "iteminfo": this.dataArray
            }
            this.selected=null;
            this.modalDeleteData3=false; 
            this.totalmasterbatchwgt=0;
            this.totalexpectedbatchwgt=0;
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



  OperatorChanged(event: {component: IonicSelectableComponent,value: any})
  {
    this.totalmasterbatchwgt=0;
    this.totalexpectedbatchwgt=0;
    this.dataArray=[];
    this.postData["iteminfo"]=[];
    this.postData["location"]=event.value.name;    
    this.tableData=this.tableDataTemp.filter((x)=>{
      return x.location === event.value.name;
    })  
    // this.tableData.map((x)=> {
    //   //  if(x.check){
    //   //   this.totalmouldqty+=parseFloat(x.mouldqty)
    //   //  }
    //   return x.check=false;
    //   })  
  }

  ShiftChanged(event: {component: IonicSelectableComponent,value: any})
  {
    this.postData["shift"]=parseInt(event.value.name);
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

  selectRecord(data,event,index){ 
    
    if(event.detail.checked){
      this.tableData[index].check=true;
      // this.tableDataTemp[index].check=true;
      this.totalmasterbatchwgt+=parseFloat(data.masterbatchwgt)
      this.totalexpectedbatchwgt+=parseFloat(data.expbatchqty)
      this.dataArray.push(data.batid)
      this.postData.iteminfo=this.dataArray;
    }
    else{
     this.tableData[index].check=false;
    //  this.tableDataTemp[index].check=false;
     this.dataArray.map((x,i)=>{
       if(x === data.batid){
        this.totalmasterbatchwgt-=parseFloat(data.masterbatchwgt)
        this.totalexpectedbatchwgt-=parseFloat(data.expbatchqty)
        this.dataArray.splice(i,1);
        this.postData.iteminfo=this.dataArray;
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
     
      if(filterValue === '') {
        // this.tableData=this.tableDataTemp;
        this.tableData=this.tableDataTemp.filter((x)=>{
          return x.location === this.postData["location"];
        })    
          
          // this.dataArray=[];
          // this.totalmasterbatchwgt=0;
          // this.totalexpectedbatchwgt=0;
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
          employee.cpdname.toLowerCase().includes(filterValueLower) ||
          employee.batid.toLowerCase().includes(filterValueLower) ||
          employee.masterbatchwgt.toLowerCase().includes(filterValueLower) ||
          employee.expbatchqty.toLowerCase().includes(filterValueLower)
          );
          // this.dataArray=[];
          // this.totalmasterbatchwgt=0;
          // this.totalexpectedbatchwgt=0;
          // this.tableData.map((x)=> {
          //   // if(x.check){
          //   //  this.totalmouldqty+=parseFloat(x.mouldqty)
          //   // }

          //   return x.check=false;
          //  })
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
