import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MouldingplanningPage } from './mouldingplanning.page';

const routes: Routes = [
  {
    path: '',
    component: MouldingplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MouldingplanningPageRoutingModule {}
