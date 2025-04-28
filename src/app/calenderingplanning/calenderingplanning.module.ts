import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderingplanningPageRoutingModule } from './calenderingplanning-routing.module';

import { CalenderingplanningPage } from './calenderingplanning.page';

import { IonicSelectableModule } from '@ionic-selectable/angular';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderingplanningPageRoutingModule,
    IonicSelectableModule,
    ReactiveFormsModule
  ],
  declarations: [CalenderingplanningPage]
})
export class CalenderingplanningPageModule {}
