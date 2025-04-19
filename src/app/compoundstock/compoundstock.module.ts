import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompoundstockPageRoutingModule } from './compoundstock-routing.module';

import { CompoundstockPage } from './compoundstock.page';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { YoutubePipe } from '../youtube.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompoundstockPageRoutingModule,
    // PdfViewerModule
  ],
  declarations: [CompoundstockPage,YoutubePipe]
})
export class CompoundstockPageModule {}
