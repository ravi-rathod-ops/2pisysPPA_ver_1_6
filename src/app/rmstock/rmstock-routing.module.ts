import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmstockPage } from './rmstock.page';

const routes: Routes = [
  {
    path: '',
    component: RmstockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmstockPageRoutingModule {}
