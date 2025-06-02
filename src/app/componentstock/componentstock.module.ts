import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentstockPageRoutingModule } from './componentstock-routing.module';

import { ComponentstockPage } from './componentstock.page';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { YoutubePipe } from '../youtube.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentstockPageRoutingModule,
    SharedModule
    // PdfViewerModule
  ],
  declarations: [ComponentstockPage]
})
export class ComponentstockPageModule {}
