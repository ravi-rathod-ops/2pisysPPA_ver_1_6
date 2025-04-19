import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeflashplanningPage } from './deflashplanning.page';

const routes: Routes = [
  {
    path: '',
    component: DeflashplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeflashplanningPageRoutingModule {}
