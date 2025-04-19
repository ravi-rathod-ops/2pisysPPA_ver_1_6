import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DimensionentryPageRoutingModule } from './dimensionentry-routing.module';

import { DimensionentryPage } from './dimensionentry.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DimensionentryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DimensionentryPage]
})
export class DimensionentryPageModule {}
