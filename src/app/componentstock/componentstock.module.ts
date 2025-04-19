import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentstockPageRoutingModule } from './componentstock-routing.module';

import { ComponentstockPage } from './componentstock.page';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { YoutubePipe } from '../youtube.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentstockPageRoutingModule,
    // PdfViewerModule
  ],
  declarations: [ComponentstockPage,YoutubePipe]
})
export class ComponentstockPageModule {}
