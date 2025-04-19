import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';

import { SettingComponent } from './setting.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    IonicModule,
    SettingRoutingModule,
    ReactiveFormsModule
  ]
})
export class SettingModule { }
