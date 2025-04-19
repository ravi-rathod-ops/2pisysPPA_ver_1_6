import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalplanningPageRoutingModule } from './finalplanning-routing.module';

import { FinalplanningPage } from './finalplanning.page';
import { FinalplanningPipe } from '../finalplanning.pipe';

import { IonicSelectableModule } from 'ionic-selectable';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalplanningPageRoutingModule,
    IonicSelectableModule,
    ReactiveFormsModule
  ],
  declarations: [FinalplanningPage, FinalplanningPipe]
})
export class FinalplanningPageModule {}
