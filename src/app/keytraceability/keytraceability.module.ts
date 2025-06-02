import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeytraceabilityPageRoutingModule } from './keytraceability-routing.module';

import { KeytraceabilityPage } from './keytraceability.page';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { YoutubePipe } from '../youtube.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeytraceabilityPageRoutingModule,
    SharedModule
    // PdfViewerModule
  ],
  declarations: [KeytraceabilityPage]
})
export class KeytraceabilityPageModule {}
