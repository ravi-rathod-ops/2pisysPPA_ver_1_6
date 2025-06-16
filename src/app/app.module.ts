// import { IonicSelectableModule } from 'ionic-selectable';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
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
import { NgSelectModule } from '@ng-select/ng-select';



import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { CalenderplanningPipe } from './calenderplanning.pipe';

import {Chooser} from '@ionic-native/chooser/ngx';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

if(localStorage.getItem('IPAddr') != null)
{
  var ip=localStorage.getItem("IPAddr");
  localStorage.setItem("IPAddr",ip);
}
else
{
  localStorage.setItem("IPAddr",environment.SOCKET_NETWORK_IP)
}


const config: SocketIoConfig = { url: localStorage.getItem("IPAddr"), options: {} };


@NgModule({
  declarations: [AppComponent, CalenderplanningPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule,
    SocketIoModule.forRoot(config),NgSelectModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [
    ScreenOrientation,Camera,FileTransfer,File,InAppBrowser,NetworkInterface,Printer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Chooser
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
