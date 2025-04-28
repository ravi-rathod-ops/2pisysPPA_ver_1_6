import { Component, Input, OnInit, ViewChild,ElementRef,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import {  IonicSelectableComponent } from '@ionic-selectable/angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import {Chooser, ChooserResult} from '@ionic-native/chooser/ngx';

@Component({
  selector: 'app-dispatchplanning',
  templateUrl: './dispatchplanning.page.html',
  styleUrls: ['./dispatchplanning.page.scss'],
})
export class DispatchplanningPage implements OnInit {

  brandImage="";
  dataUrl=localStorage.getItem('url');
  tableData=[];
  deleteData=[];
  currentData:any;
  // currentDate=formatDate(new Date, 'yyyy-MM-dd', 'en');
  dataArray=[];
  postData={
    "cusid": "",
    "didate": "",
    "isso":0,
    "iteminfo": this.dataArray
  }
  flag:any;
  selected:any;
  selectedCustomer:any;
  selectedComponent:any;
  modalDeleteData=false;
  modalDeleteData2=false;
  modalDeleteData3=false;
  currentItem:any;
  customerArray=[]
  planDate:any;
  datePipe: DatePipe = new DatePipe('en-US');
  currentDate:any;
  mode=false;
  componentArray=[]
  sampleArray=[];
  dinum="";
  diqty=null;
  type=true;
  setDisabled=true;


  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
  base64: any;

  constructor(private router: Router,private chooser:Chooser,private zone:NgZone,private screenOrientation: ScreenOrientation,public toastController: ToastController,private http: HttpClient,public loadingController: LoadingController) {

    this.type=true;

    if(localStorage.getItem('userid') == null && localStorage.getItem('password') == null)
    {
      this.router.navigate(["home"]);
    }

    this.checkStorage();

   }

   onKeyup(event,qty,index){
      // console.log(event.target.value + " " + this.diqty)
      if(this.mode) {
        if(event.target.value > this.diqty){
          event.target.value = this.diqty;
          this.tableData[index].diqty = parseInt(event.target.value);
          this.toastfunction("Qty is not exceed greater then actual Qty","danger");
            return false;
        }
      }
   }
   onChangeValue(data,index,item,type){
    if(type == "component"){

      if(this.mode){
        let datass=this.sampleArray.filter((x)=>{
          return x.cmpdid == data.value.value;
        })

        this.tableData[index].cmpdid = datass[0].cmpdid;
        this.tableData[index].didesc =datass[0].soref;
        this.tableData[index].diqty = parseInt(datass[0].penqty);
        this.diqty=parseInt(datass[0].penqty);
        this.dinum=datass[0].soref;
        console.log(this.tableData);
      }
      else{
        this.tableData[index].cmpdid = data.value.value;
      }

    }
    if(type == "di")
    {
      this.tableData[index].didesc =data.target.value;
    }
    if(type == "qty")
    {
      this.tableData[index].diqty = parseInt(data.target.value);
    }
    if(type == "Sales")
    {
      this.type=false;
      this.mode = true;
      this.setDisabled=true;
      setTimeout(()=>{
        let dd=new Date();
        let ddc=dd.setDate(dd.getDate())
        let d=this.datePipe.transform(ddc, 'yyyy-MM-dd');
        (document.getElementById("datefield") as HTMLInputElement).value=d;
        // this.planDate=d;
        this.currentDate=d;
        this.postData.didate=d;
        console.log(d)
      },1000)
    }
    if(type == "Schedule")
    {
      this.type=false;
      this.mode = false;
      this.setDisabled=false;
      setTimeout(()=>{
        let dd=new Date();
        let ddc=dd.setDate(dd.getDate())
        let d=this.datePipe.transform(ddc, 'yyyy-MM-dd');
        (document.getElementById("datefield") as HTMLInputElement).value=d;
        // this.planDate=d;
        this.currentDate=d;
        this.postData.didate=d;
        console.log(d)
      },1000)
    }
    // console.log(this.tableData)
  }


  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
    this.scan();
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  addRow(){

    if(this.selectedCustomer === "" || this.selectedCustomer == undefined){
      this.toastfunction("Please Select Customer","danger");
    }
    else
    {
      this.tableData.push({
        "cmpdid": "",
        "didesc":"",
        "diqty": 0
      })

    }

  }

  deleteItem(index){
    this.tableData.splice(index,1)
  }

  filesel(event)
  {

    this.zone.run(()=>{
      var files = event.target.files;
      var file = files[0];
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onloadend = (event: any) => {
        var csv = event.target.result;
        var array = csv.split("\n");
        var headers=["cmpdid","didesc","diqty"]

        for(var i=0;i<array.length-1;i++){
          var obj = {};
          var currentline=array[i].split(",");

          for(var j=0;j<headers.length;j++){

            if(headers[j] == "didesc"){
              obj[headers[j]] = "";
            }
            else
            {
              obj[headers[j]] = currentline[j];
            }

          }
          obj["diqty"]=parseInt(obj["diqty"])
          if(this.selectedCustomer === "" || this.selectedCustomer == undefined){
            this.toastfunction("Please Select Customer","danger");
          }else{
            this.tableData.push(obj);
            setTimeout(()=>{
              this.modalDeleteData2=true;
            },1000)
          }


        }

      };
    })


  }

  excelData=[];
  fileObj:ChooserResult;
  pickfile(){
    this.chooser.getFile().then((value:ChooserResult)=>{
      let val=value.dataURI.split(",");
      this.fileObj = value;
      let a=atob(val[1])

      var array = a.split("\n");
      var headers=["cmpdid","didesc","diqty"]

      for(var i=0;i<array.length;i++){
        let obj;
        if(array[i] != ""){
          obj = {};
          var currentline=array[i].split(",");
          let  chkval=this.componentArray.some(el => el.name === currentline[0])
          let  comName=this.componentArray.filter(el => el.name === currentline[0])
          if(chkval){

            if(!this.mode){

              for(var j=0;j<headers.length;j++){
                if(currentline.length == 2){
                  obj["cmpdid"]=comName[0].value;
                  obj["didesc"]="";
                  let a=currentline[1];
                  a=a.replace("\r","")
                  obj["diqty"]=parseInt(a)
                }
                if(currentline.length == 3){
                  obj["cmpdid"]=comName[0].value;
                  obj["didesc"]=currentline[1]
                  let a=currentline[2];
                  a=a.replace("\r","")
                  obj["diqty"]=parseInt(a)
                }
              }

            }
            else{

              for(var j=0;j<headers.length;j++){


                  obj["cmpdid"]=comName[0].value;
                  obj["didesc"]=currentline[1]
                  let a=currentline[2];
                  a=a.replace("\r","")
                  obj["diqty"]=parseInt(a)

                  let arr=this.sampleArray.filter((x)=>{
                    return x.cmpdname === currentline[0]
                  })

                  console.log(arr)

                  if(arr[0].soref != currentline[1]){
                    this.toastfunction("DI not match with "+currentline[0],"danger");
                    this.modalDeleteData2=false;
                    return false;
                  }

                  if(parseInt(currentline[2]) > parseInt(arr[0].penqty)){
                    this.toastfunction("DI Qty : "+currentline[2]+" is greater then : "+arr[0].penqty+" for "+currentline[0],"danger");
                    this.modalDeleteData2=false;
                    return false;
                  }
              }

            }




          }
          else{
            this.toastfunction("No Such Part Number for "+currentline[0],"danger");
            this.modalDeleteData2=false;
            return false;
          }

        }

        if(this.selectedCustomer === "" || this.selectedCustomer == undefined){
          this.toastfunction("Please Select Customer","danger");
        }else{
          // this.tableData.push(obj);
          if(obj != undefined){
            this.excelData.push(obj)
          }

          console.log(this.tableData)
          this.modalDeleteData2=true;
        }


      }

    },(err)=>{
      alert(JSON.stringify(err))
    })
  }

  getComponentValue(data){
    let a=this.componentArray.filter((x)=>{ return x.name === data})
    console.log(a)
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

      this.http.get<any>(this.dataUrl+"/api/despatchplan",{headers}).subscribe({
        next: async data => {
              data.message.map((x)=>{
                this.customerArray.push({name:x.cusname,value:x.cusid});
              })
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

    if(this.excelData.length > 0){this.tableData=this.excelData}
      this.modalDeleteData2=false;
      let flag =0;
      if(this.tableData.length == 0){
        this.toastfunction("Please add DI details","danger");
        return false;
      }
      this.postData.isso = !this.mode ? 0: 1;
      this.tableData.map((x)=>{
        if(x.cmpdid == "" || x.diqty <= 0){
          this.toastfunction("Please provide datas in DI","danger");
          flag++;
        }
      })

      if(flag == 0){
        this.postData.iteminfo=this.tableData;

        console.log(this.postData)
        this.selectedCustomer="";
        this.tableData=[];
        this.excelData=[];
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

        this.http.post<any>(this.dataUrl+'/api/despatchplan',this.postData,{headers}).subscribe({
          next: async data => {

            if(data.status == "success")
            {
              loading.dismiss();
              this.toastfunction(data.message,"success");
              this.scan();
              this.tableData=[];
              this.excelData=[];
              this.dataArray=[];
              this.selected=null;
              this.modalDeleteData3=false;
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

  }


  async CustomerChanged(event: {component: IonicSelectableComponent,value: any})
  {
    this.postData["cusid"]=event.value.value;
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

      let data=!this.mode ? event.value.value: event.value.value+"/so"
      this.componentArray=[];
      this.http.get<any>(this.dataUrl+"/api/despatchplan/"+data,{headers}).subscribe({
        next: async data => {
          this.tableData=[];
          this.sampleArray=data.message;
          data.message.map((x)=>{
            this.componentArray.push({name:x.cmpdname,value:x.cmpdid});
          })
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





}
