import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseorderplanningPage } from './purchaseorderplanning.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseorderplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseorderplanningPageRoutingModule {}
