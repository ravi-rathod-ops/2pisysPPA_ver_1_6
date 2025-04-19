import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectionplanningPage } from './inspectionplanning.page';

const routes: Routes = [
  {
    path: '',
    component: InspectionplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectionplanningPageRoutingModule {}
