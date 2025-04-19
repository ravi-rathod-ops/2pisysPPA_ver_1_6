import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentstockPage } from './componentstock.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentstockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentstockPageRoutingModule {}
