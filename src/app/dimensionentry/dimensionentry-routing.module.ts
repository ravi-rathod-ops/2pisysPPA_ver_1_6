import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DimensionentryPage } from './dimensionentry.page';

const routes: Routes = [
  {
    path: '',
    component: DimensionentryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DimensionentryPageRoutingModule {}
