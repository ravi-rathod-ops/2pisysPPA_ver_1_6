import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockadjustmentPage } from './stockadjustment.page';

const routes: Routes = [
  {
    path: '',
    component: StockadjustmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockadjustmentPageRoutingModule {}
