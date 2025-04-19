import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalplanningPage } from './finalplanning.page';

const routes: Routes = [
  {
    path: '',
    component: FinalplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalplanningPageRoutingModule {}
