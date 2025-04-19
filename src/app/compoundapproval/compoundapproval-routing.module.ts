import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompoundapprovalPage } from './compoundapproval.page';

const routes: Routes = [
  {
    path: '',
    component: CompoundapprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompoundapprovalPageRoutingModule {}
