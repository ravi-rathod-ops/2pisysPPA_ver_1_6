import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MouldingplanningPageRoutingModule } from './mouldingplanning-routing.module';

import { MouldingplanningPage } from './mouldingplanning.page';
import { IonicSelectableModule } from '@ionic-selectable/angular';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MouldingplanningPageRoutingModule,
    NgSelectModule
  ],
  declarations: [MouldingplanningPage]
})
export class MouldingplanningPageModule {}
