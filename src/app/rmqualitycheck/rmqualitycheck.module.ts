import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmqualitycheckPageRoutingModule } from './rmqualitycheck-routing.module';

import { RmqualitycheckPage } from './rmqualitycheck.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmqualitycheckPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RmqualitycheckPage]
})
export class RmqualitycheckPageModule {}
