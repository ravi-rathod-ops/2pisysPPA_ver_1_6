import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalplanningPageRoutingModule } from './finalplanning-routing.module';

import { FinalplanningPage } from './finalplanning.page';
import { FinalplanningPipe } from '../finalplanning.pipe';


import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalplanningPageRoutingModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  declarations: [FinalplanningPage, FinalplanningPipe]
})
export class FinalplanningPageModule {}
