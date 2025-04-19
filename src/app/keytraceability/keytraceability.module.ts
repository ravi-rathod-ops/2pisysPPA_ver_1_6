import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeytraceabilityPageRoutingModule } from './keytraceability-routing.module';

import { KeytraceabilityPage } from './keytraceability.page';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { YoutubePipe } from '../youtube.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeytraceabilityPageRoutingModule,
    // PdfViewerModule
  ],
  declarations: [KeytraceabilityPage,YoutubePipe]
})
export class KeytraceabilityPageModule {}
