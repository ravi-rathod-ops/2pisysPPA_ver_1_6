import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FetchdrawingPageRoutingModule } from './fetchdrawing-routing.module';

import { FetchdrawingPage } from './fetchdrawing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FetchdrawingPageRoutingModule
  ],
  declarations: [FetchdrawingPage]
})
export class FetchdrawingPageModule {}
