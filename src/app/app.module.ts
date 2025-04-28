import { IonicSelectableModule } from '@ionic-selectable/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { CommonModule } from '@angular/common';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { Printer} from '@awesome-cordova-plugins/printer/ngx';
import { Printer } from '@ionic-native/printer/ngx/index';



import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { CalenderplanningPipe } from './calenderplanning.pipe';

import {Chooser} from '@ionic-native/chooser/ngx';

if(localStorage.getItem('IPAddr') != null)
{
  var ip=localStorage.getItem("IPAddr");
  localStorage.setItem("IPAddr",ip);
}
else
{
  localStorage.setItem("IPAddr","192.168.1.100:3000")
}


const config: SocketIoConfig = { url: localStorage.getItem("IPAddr"), options: {} };


@NgModule({
  declarations: [AppComponent, CalenderplanningPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule,IonicSelectableModule,
    SocketIoModule.forRoot(config)],
  providers: [
    ScreenOrientation,Camera,FileTransfer,File,InAppBrowser,NetworkInterface,Printer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Chooser
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
