import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompoundstockPageRoutingModule } from './compoundstock-routing.module';

import { CompoundstockPage } from './compoundstock.page';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { YoutubePipe } from '../youtube.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompoundstockPageRoutingModule,
    SharedModule
    // PdfViewerModule
  ],
  declarations: [CompoundstockPage]
})
export class CompoundstockPageModule {}
