import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseorderapprovalRoutingModule } from './purchaseorderapproval-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PurchaseorderapprovalComponent } from './purchaseorderapproval.page';


@NgModule({
  declarations: [PurchaseorderapprovalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PurchaseorderapprovalRoutingModule
  ],
})
export class PurchaseorderapprovalModule { }
