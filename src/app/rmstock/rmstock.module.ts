import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmstockPageRoutingModule } from './rmstock-routing.module';

import { RmstockPage } from './rmstock.page';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { YoutubePipe } from '../youtube.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmstockPageRoutingModule,
    // PdfViewerModule
    SharedModule
  ],
  declarations: [RmstockPage],
})
export class RmstockPageModule {}
