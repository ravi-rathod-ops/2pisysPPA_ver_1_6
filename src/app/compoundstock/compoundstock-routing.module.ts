import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompoundstockPage } from './compoundstock.page';

const routes: Routes = [
  {
    path: '',
    component: CompoundstockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompoundstockPageRoutingModule {}
