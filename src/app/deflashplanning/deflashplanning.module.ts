import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeflashplanningPageRoutingModule } from './deflashplanning-routing.module';

import { DeflashplanningPage } from './deflashplanning.page';
import { IonicSelectableModule } from 'ionic-selectable';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    DeflashplanningPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DeflashplanningPage]
})
export class DeflashplanningPageModule {}
