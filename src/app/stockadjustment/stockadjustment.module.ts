import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockadjustmentPageRoutingModule } from './stockadjustment-routing.module';

import { StockadjustmentPage } from './stockadjustment.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockadjustmentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StockadjustmentPage]
})
export class StockadjustmentPageModule {}
