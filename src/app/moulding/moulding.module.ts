import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MouldingPageRoutingModule } from './moulding-routing.module';

import { MouldingPage } from './moulding.page';
import { ReactiveFormsModule } from '@angular/forms';
import { YoutubePipe } from '../youtube.pipe';

import { IonicSelectableModule } from '@ionic-selectable/angular';

// import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HTTP } from '@ionic-native/http/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MouldingPageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    // PdfViewerModule
  ],
  declarations: [MouldingPage,YoutubePipe],
  providers: [HTTP]
})
export class MouldingPageModule {}
