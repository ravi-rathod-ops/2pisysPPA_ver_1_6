import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { formatDate } from '@angular/common';

@Component({
  selector: 'app-inspectionplanning',
  templateUrl: './inspectionplanning.page.html',
  styleUrls: ['./inspectionplanning.page.scss'],
})
export class InspectionplanningPage implements OnInit {
  brandImage="";
  dataUrl=localStorage.getItem('url');
  tableData=[];
  tableDataTemp=[];
  currentData:any;
  flag=true;
  // currentDate=formatDate(new Date, 'yyyy-MM-dd', 'en');
  dataArray=[];
  postData={
    // "issdate": "",
    "iteminfo": this.dataArray
  }
  searchData="";
  totalreceivedqty=0;
  modalDeleteData3=false;
  

  constructor(private router: Router,public toastController: ToastController,private http: HttpClient,public loadingController: LoadingController) {

    if(localStorage.getItem('userid') == null && localStorage.getItem('password') == null)
    {
      this.router.navigate(["home"]);   
    }

    this.checkStorage();
    

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
    loading.present();
    
    const headers = { 
      'auth-id': localStorage.getItem('authid'), 
      'client-id': localStorage.getItem('clientid'),
      'user': localStorage.getItem('userid'),
      'password':localStorage.getItem('password') }

      this.http.get<any>(this.dataUrl+"/api/inspectissue",{headers}).subscribe({
        next: async data => {
          data.message.map((x)=>{
            x.avlqty=parseFloat(x.avlqty)
            x.check=false;
          })   
          this.tableData=data.message;
          this.tableDataTemp=data.message;
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

    // if(this.postData.issdate !=""){

      if(this.dataArray.length == 0){
        this.toastfunction("Please Select any Record","danger");
        this.modalDeleteData3=false;
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
      
      this.http.post<any>(this.dataUrl+'/api/inspectissue',this.postData,{headers}).subscribe({
        next: async data => {
          
          if(data.status == "success")
          { 
            loading.dismiss(); 
            this.toastfunction(data.message,"success");         
            this.scan();
            this.tableData=[];  
            this.tableDataTemp=[];         
            this.dataArray=[];
            this.postData={
              // "issdate": "",
              "iteminfo": this.dataArray
            }
            this.searchData="";
            this.modalDeleteData3=false;
            this.totalreceivedqty=0;
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

    // }
    // else{
    //   this.toastfunction("Please Select Date","danger");
    // }
    

  console.log(this.postData)
   
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

  // selectDate(e){    
  //   this.postData["issdate"]=this.currentDate;
  // }

  navBack()
  {
    this.router.navigate(['home']);
  }

  selectRecord(data,event,index){ 

   if(event.detail.checked){
    this.tableData[index].check=true;
    this.totalreceivedqty+=parseFloat(data.avlqty)
      this.dataArray.push({
        "sno": parseInt(data.sno),
        "boughtout": parseInt(data.boughtout)
      })
   }
   else{
    this.tableData[index].check=true;
    this.dataArray.map((x,i)=>{
      if(x.sno === parseInt(data.sno)){
        this.totalreceivedqty-=parseFloat(data.avlqty)
        this.dataArray.splice(i,1);
      }
    })
   }
   this.postData['iteminfo']=this.dataArray;
    // console.log(this.postData)   
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
        // this.totalreceivedqty=0;
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
            // employee.avlqty.includes(filterValueLower) || 
            // employee.boughtout.toLowerCase().includes(filterValueLower) || 
            employee.cmpdname.toLowerCase().includes(filterValueLower) || 
            employee.cmpdrefno.toLowerCase().includes(filterValueLower) || 
            employee.issref.toLowerCase().includes(filterValueLower) 
            // ||employee.sno.toLowerCase().includes(filterValueLower)
            );
            // this.dataArray=[];
            // this.postData['iteminfo']=this.dataArray;
            // this.totalreceivedqty=0;
            // this.tableData.map((x)=> {
            //   //  if(x.check){
            //   //   this.totalmouldqty+=parseFloat(x.mouldqty)
            //   //  }
            //   return x.check=false;
            //   })
      }
  }
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
 

}
