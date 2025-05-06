import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixingplanningPageRoutingModule } from './mixingplanning-routing.module';

import { MixingplanningPage } from './mixingplanning.page';


import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixingplanningPageRoutingModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  declarations: [MixingplanningPage]
})
export class MixingplanningPageModule {}
