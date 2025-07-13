import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspectionplanningPageRoutingModule } from './inspectionplanning-routing.module';

import { InspectionplanningPage } from './inspectionplanning.page';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspectionplanningPageRoutingModule,
    NgSelectModule,
  ],
  declarations: [InspectionplanningPage]
})
export class InspectionplanningPageModule {}
