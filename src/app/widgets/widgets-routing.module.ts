import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetsPage } from './widgets.page';

const routes: Routes = [
  {
    path: '',
    component: WidgetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetsPageRoutingModule {}
