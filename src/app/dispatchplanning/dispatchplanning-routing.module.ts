import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchplanningPage } from './dispatchplanning.page';

const routes: Routes = [
  {
    path: '',
    component: DispatchplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispatchplanningPageRoutingModule {}
