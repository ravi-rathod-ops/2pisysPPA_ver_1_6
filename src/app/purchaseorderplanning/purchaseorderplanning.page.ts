import { Component, Input, OnInit, ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-purchaseorderplanning',
  templateUrl: './purchaseorderplanning.page.html',
  styleUrls: ['./purchaseorderplanning.page.scss'],
})
export class PurchaseorderplanningPage implements OnInit {

  brandImage="";
  dataUrl=localStorage.getItem('url');
  tableData=[];
  tableData2=[];
  tableDataTemp=[];
  flag=true;
  flag2=true;
  purchaseDataModal=false;
  currentPO;
  supplierArray=[];
  currencyList=[];
  locations=[];
  deleteData=[];

  modalDeleteData=false;
  modalDeleteData2=false;
  modalDeleteData3=false;
  dataArray=[];
  currentItem:any;

  raisePO:any;

  InsuranceValue=0;
  FreightValue=0;
  Remarks="";
  Supplier="";
  QuoteRef="";
  Locations="";
  deliverDate="";
  forJobWork:0;
  ismaster=0;
  forCurrency=0;
  forCurrencyType="";
  intentno:any;
  totalminstock=0;
  ramClass="";

  searchData="";


  datePipe: DatePipe = new DatePipe('en-US');

  constructor(private _elementRef : ElementRef,private router: Router,public toastController: ToastController,private http: HttpClient,public loadingController: LoadingController) { 
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

      this.http.get<any>(this.dataUrl+"/api/raisepo/all",{headers}).subscribe({
        next: async data => { 
          for (var key of Object.keys(data.message)) {
            if(key != "forcurrs" && key != "locations"){  
              data.message[key].indentno=parseInt(data.message[key].indentno)
              data.message[key].minstock=parseFloat(data.message[key].minstock)
              data.message[key].stock=parseFloat(data.message[key].stock)

              this.tableDataTemp.push(data.message[key])
              this.totalminstock+=data.message[key].minstock;
            
              console.log(data.message[key].stock)

              if(data.message[key].indentno > 0 || data.message[key].minstock >  data.message[key].stock){
               
                this.tableData.push(data.message[key]) 
                this.tableData2.push(data.message[key])                
              }
            } 
            
            if(key == "forcurrs"){
              this.currencyList=data.message[key];
            }

            if(key == "locations"){
              this.locations=data.message[key];                       
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

  async editPO(obj){   

    this.raisePO={}; 
    this.InsuranceValue=0;
    this.FreightValue=0;
    this.Remarks="";
    this.Supplier="";
    this.QuoteRef="";
    this.Locations="";
    this.deliverDate="";
    this.forJobWork=0;
    this.ismaster=0;
    this.forCurrency=0;
    this.forCurrencyType="";
    this.intentno=0;
    this.ramClass="";       

    this.intentno=obj.indentno;
    this.ramClass=obj.ramclass;
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

    if(obj.indentno > 0)
    {
      this.http.get<any>(this.dataUrl+"/api/raisepo/indentno/"+parseInt(obj.indentno),{headers}).subscribe({
        next: async data => { 
          console.log(data)
          this.currentPO=data.message[0];
          this.currentPO.ramapprovedrate=parseFloat(data.message[0].ramapprovedrate);
          this.currentPO.ramorderqty=parseFloat(data.message[0].ramorderqty);
          this.supplierArray=data.message["suppliers"];

          if(this.supplierArray.length == 1){
            this.Supplier=this.supplierArray[0];
          }

          if(data.message[0].prevsupname != ""){
            this.Supplier=data.message[0].prevsupname;
          }

          if(this.locations.length == 1){
            this.Locations=this.locations[0];
          }

          this.purchaseDataModal=true;                 
          loading.dismiss();  

          setTimeout(()=>{
            let dd=new Date();
            let ddc=dd.setDate(dd.getDate() + 7)
            let d=this.datePipe.transform(ddc, 'yyyy-MM-dd');
            (document.getElementById("datefield") as HTMLInputElement).value=d;
            this.deliverDate=d;
            console.log(d)
          },1000)
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
    else
    {
      // if(obj.ramclass != ""){
        if(obj.ramclass == "CPD"){
          this.http.get<any>(this.dataUrl+"/api/raisepo/cpdid/"+obj.ramid,{headers}).subscribe({
            next: async data => { 
              console.log(data)
              this.currentPO=data.message[0];
              this.currentPO.ramapprovedrate=parseFloat(data.message[0].ramapprovedrate);
              this.currentPO.ramorderqty=parseFloat(data.message[0].ramorderqty);
              this.supplierArray=data.message["suppliers"]; 
              this.currentPO["ismaster"] == 1 ?  this.ismaster = 1 :  this.ismaster = 0;        
    
              if(this.supplierArray.length == 1){
                this.Supplier=this.supplierArray[0];
              }

              if(data.message[0].prevsupname != ""){
                this.Supplier=data.message[0].prevsupname;
              }
    
              if(this.locations.length == 1){
                this.Locations=this.locations[0];
              }
              
              this.purchaseDataModal=true;                 
              loading.dismiss();  
    
              setTimeout(()=>{
                let dd=new Date();
                let ddc=dd.setDate(dd.getDate() + 7)
                let d=this.datePipe.transform(ddc, 'yyyy-MM-dd');            
                (document.getElementById("datefield") as HTMLInputElement).value=d;
                this.deliverDate=d;
                console.log(d)
              },1000)
              
    
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
        else if(obj.ramclass == "CMPD"){
          this.http.get<any>(this.dataUrl+"/api/raisepo/cmpdid/"+obj.ramid,{headers}).subscribe({
            next: async data => { 
              console.log(data)
              this.currentPO=data.message[0];
              this.currentPO.ramapprovedrate=parseFloat(data.message[0].ramapprovedrate);
              this.currentPO.ramorderqty=parseFloat(data.message[0].ramorderqty);
              this.supplierArray=data.message["suppliers"]; 
              this.currentPO["ismaster"] == 1 ?  this.ismaster = 1 :  this.ismaster = 0;        
    
              if(this.supplierArray.length == 1){
                this.Supplier=this.supplierArray[0];
              }

              if(data.message[0].prevsupname != ""){
                this.Supplier=data.message[0].prevsupname;
              }
    
              if(this.locations.length == 1){
                this.Locations=this.locations[0];
              }
              
              this.purchaseDataModal=true;                 
              loading.dismiss();  
    
              setTimeout(()=>{
                let dd=new Date();
                let ddc=dd.setDate(dd.getDate() + 7)
                let d=this.datePipe.transform(ddc, 'yyyy-MM-dd');            
                (document.getElementById("datefield") as HTMLInputElement).value=d;
                this.deliverDate=d;
                console.log(d)
              },1000)
              
    
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
          this.http.get<any>(this.dataUrl+"/api/raisepo/ramid/"+obj.ramid,{headers}).subscribe({
            next: async data => { 
              console.log(data)
              this.currentPO=data.message[0];
              this.currentPO.ramapprovedrate=parseFloat(data.message[0].ramapprovedrate);
              this.currentPO.ramorderqty=parseFloat(data.message[0].ramorderqty);
              this.supplierArray=data.message["suppliers"]; 
              this.currentPO["ismaster"] == 1 ?  this.ismaster = 1 :  this.ismaster = 0;        
    
              if(this.supplierArray.length == 1){
                this.Supplier=this.supplierArray[0];
              }

              if(data.message[0].prevsupname != ""){
                this.Supplier=data.message[0].prevsupname;
              }
    
              if(this.locations.length == 1){
                this.Locations=this.locations[0];
              }
              
              this.purchaseDataModal=true;                 
              loading.dismiss();  
    
              setTimeout(()=>{
                let dd=new Date();
                let ddc=dd.setDate(dd.getDate() + 7)
                let d=this.datePipe.transform(ddc, 'yyyy-MM-dd');            
                (document.getElementById("datefield") as HTMLInputElement).value=d;
                this.deliverDate=d;
                console.log(d)
              },1000)
              
    
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
      // }
     
     
    }

     
      
  }
  
  async raisePurchaseOrder(){

    if(this.forJobWork){
      if(this.ismaster){
        this.raisePO={
          "ramid" : this.currentPO.ramid,
          "indentno" : this.intentno,
          "supplier" : this.Supplier,
          "expdate" : this.deliverDate,
          "quoteref" : this.QuoteRef,
          "location" : this.Locations,		
          "quantity" :this.currentPO.ramorderqty,
          "isjobwork" : 1,         
          "remarks" : this.Remarks,
          "ismaster":1,
          "ramclass":this.ramClass
        };
      }
      else{
        this.raisePO={
          "ramid" : this.currentPO.ramid,
          "indentno" : this.intentno,
          "supplier" : this.Supplier,
          "expdate" : this.deliverDate,
          "quoteref" : this.QuoteRef,
          "location" : this.Locations,		
          "quantity" :this.currentPO.ramorderqty,
          "isjobwork" : 1,         
          "remarks" : this.Remarks,
          "ramclass":this.ramClass
        };
      }
       
    }
    else{
      if(this.ismaster){
        this.raisePO={
          "ramid" : this.currentPO.ramid,
          "indentno" : this.intentno,
          "supplier" : this.Supplier,
          "expdate" : this.deliverDate,
          "quoteref" : this.QuoteRef,
          "location" : this.Locations,		
          "quantity" :this.currentPO.ramorderqty,
          "isjobwork" : 0,
          "frcurr" : this.forCurrencyType,
          "frrate" : this.forCurrency,
          "rate" : this.currentPO.ramapprovedrate,
          "insurance" : this.InsuranceValue,
          "freight" : this.FreightValue, 		
          "remarks" : this.Remarks,
          "ismaster":1,
          "ramclass":this.ramClass
        };
      }
      else{
        this.raisePO={
          "ramid" : this.currentPO.ramid,
          "indentno" : this.intentno,
          "supplier" : this.Supplier,
          "expdate" : this.deliverDate,
          "quoteref" : this.QuoteRef,
          "location" : this.Locations,		
          "quantity" :this.currentPO.ramorderqty,
          "isjobwork" : 0,
          "frcurr" : this.forCurrencyType,
          "frrate" : this.forCurrency,
          "rate" : this.currentPO.ramapprovedrate,
          "insurance" : this.InsuranceValue,
          "freight" : this.FreightValue, 		
          "remarks" : this.Remarks,
          "ramclass":this.ramClass
        }; 
      }
       
    }
   
    console.log(this.raisePO)

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
    
    this.http.post<any>(this.dataUrl+'/api/raisepo',this.raisePO,{headers}).subscribe({
      next: async data => {
        
        if(data.status == "success")
        { 
          loading.dismiss(); 
          this.toastfunction(data.message,"success");   
          this.purchaseDataModal=false;      
          this.modalDeleteData3=false;  
          this.tableData=[];
          this.tableData2=[];
          this.tableDataTemp=[]; 
          this.searchData="";  
          this.scan();         
        }
        else
        { 
          loading.dismiss(); 
          this.toastfunction(data.message,"danger");           
          this.purchaseDataModal=false;  
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

  async deleteList() {
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
      
      this.http.get<any>(this.dataUrl+'/api/cancelpo',{headers}).subscribe({
        next: async data => {
          
          if(data.status == "success")
          { 
            data.message.forEach(element => {
              element.quantity=parseFloat(element.quantity)
              element.recQty=parseFloat(element.recQty)
            });
            this.deleteData=data.message;
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


  async deletePOItem() {
    
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
    
    this.http.post<any>(this.dataUrl+'/api/cancelpo/'+this.currentItem.purId,"",{headers}).subscribe({
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
            loading.dismiss(); 
            this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
          }
      }
    });

  

}


  async callDeflashing(data){
    this.currentItem=data;
    this.modalDeleteData2=true;
  }

  async callPurchase(){

    if(this.Supplier == ""){
      this.toastfunction("Please Select Supplier","danger");  
      return false;
    }

    if(this.Locations == ""){
      this.toastfunction("Please Select Location","danger");  
      return false;
    }

    this.modalDeleteData3=true;
  }


  navBack()
  {
    this.router.navigate(['home']);
  }

  applyFilter(filterValue: string) {
    
      let filterValueLower = filterValue.toLowerCase();
      if(filterValue === '' ) {
          this.tableData=this.tableData2;
      } else 
      {
        if(filterValue.length >= 3)
        {
                  this.tableData = this.tableDataTemp.filter((employee) => 
                  employee.ramname.toLowerCase().includes(filterValueLower) || 
                  employee.ramgrade.toLowerCase().includes(filterValueLower) || 
                  employee.uom.toLowerCase().includes(filterValueLower)                         
                  // employee.minstock.includes(filterValueLower) ||
                  // employee.stock.includes(filterValueLower)
                  );
        }
      }
    
}

}
