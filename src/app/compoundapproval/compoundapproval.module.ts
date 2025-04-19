import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompoundapprovalPageRoutingModule } from './compoundapproval-routing.module';

import { CompoundapprovalPage } from './compoundapproval.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompoundapprovalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CompoundapprovalPage]
})
export class CompoundapprovalPageModule {}
