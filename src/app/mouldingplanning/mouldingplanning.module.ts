import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MouldingplanningPageRoutingModule } from './mouldingplanning-routing.module';

import { MouldingplanningPage } from './mouldingplanning.page';
import { IonicSelectableModule } from '@ionic-selectable/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MouldingplanningPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [MouldingplanningPage]
})
export class MouldingplanningPageModule {}
