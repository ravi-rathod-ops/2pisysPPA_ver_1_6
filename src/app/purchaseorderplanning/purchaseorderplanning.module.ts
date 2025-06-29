import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseorderplanningPageRoutingModule } from './purchaseorderplanning-routing.module';

import { PurchaseorderplanningPage } from './purchaseorderplanning.page';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseorderplanningPageRoutingModule,
    NgSelectModule
  ],
  declarations: [PurchaseorderplanningPage]
})
export class PurchaseorderplanningPageModule {}
