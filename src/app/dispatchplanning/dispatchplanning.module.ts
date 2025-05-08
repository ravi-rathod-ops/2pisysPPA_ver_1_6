import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispatchplanningPageRoutingModule } from './dispatchplanning-routing.module';

import { DispatchplanningPage } from './dispatchplanning.page';
import { DispatchplanningPipe } from '../dispatchplanning.pipe';

import { IonicSelectableModule } from '@ionic-selectable/angular';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    DispatchplanningPageRoutingModule
  ],
  declarations: [DispatchplanningPage, DispatchplanningPipe]
})
export class DispatchplanningPageModule {}
