import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseorderplanningPageRoutingModule } from './purchaseorderplanning-routing.module';

import { PurchaseorderplanningPage } from './purchaseorderplanning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseorderplanningPageRoutingModule
  ],
  declarations: [PurchaseorderplanningPage]
})
export class PurchaseorderplanningPageModule {}
