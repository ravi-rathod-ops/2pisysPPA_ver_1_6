import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixingplanningPageRoutingModule } from './mixingplanning-routing.module';

import { MixingplanningPage } from './mixingplanning.page';

import { IonicSelectableModule } from '@ionic-selectable/angular';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixingplanningPageRoutingModule,
    IonicSelectableModule,
    ReactiveFormsModule
  ],
  declarations: [MixingplanningPage]
})
export class MixingplanningPageModule {}
