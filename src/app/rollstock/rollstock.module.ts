import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RollstockPageRoutingModule } from './rollstock-routing.module';

import { RollstockPage } from './rollstock.page';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { YoutubePipe } from '../youtube.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RollstockPageRoutingModule,
    SharedModule
    // PdfViewerModule
  ],
  declarations: [RollstockPage]
})
export class RollstockPageModule {}
