import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanhomePageRoutingModule } from './planhome-routing.module';

import { PlanhomePage } from './planhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanhomePageRoutingModule
  ],
  declarations: [PlanhomePage]
})


export class PlanhomePageModule implements OnInit {

  items :any = []; 
  ngOnInit() {
    this.items=['route:test'];
  }
}

