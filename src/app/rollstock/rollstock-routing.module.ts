import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RollstockPage } from './rollstock.page';

const routes: Routes = [
  {
    path: '',
    component: RollstockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RollstockPageRoutingModule {}
