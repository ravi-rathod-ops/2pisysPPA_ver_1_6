import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MouldingPage } from './moulding.page';

const routes: Routes = [
  {
    path: '',
    component: MouldingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MouldingPageRoutingModule {}
