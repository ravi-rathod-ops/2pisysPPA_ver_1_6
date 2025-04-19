import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanhomePage } from './planhome.page';

const routes: Routes = [
  {
    path: '',
    component: PlanhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanhomePageRoutingModule {}
