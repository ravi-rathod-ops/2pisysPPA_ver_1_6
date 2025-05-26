import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseorderapprovalComponent } from './purchaseorderapproval.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseorderapprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseorderapprovalRoutingModule { }
