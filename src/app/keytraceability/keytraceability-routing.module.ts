import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeytraceabilityPage } from './keytraceability.page';

const routes: Routes = [
  {
    path: '',
    component: KeytraceabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeytraceabilityPageRoutingModule {}
