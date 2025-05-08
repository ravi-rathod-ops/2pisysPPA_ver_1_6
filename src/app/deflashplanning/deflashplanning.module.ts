import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeflashplanningPageRoutingModule } from './deflashplanning-routing.module';

import { DeflashplanningPage } from './deflashplanning.page';
import { IonicSelectableModule } from '@ionic-selectable/angular';

import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    DeflashplanningPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DeflashplanningPage]
})
export class DeflashplanningPageModule {}
