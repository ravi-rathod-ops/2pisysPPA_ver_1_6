import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalenderingplanningPage } from './calenderingplanning.page';

const routes: Routes = [
  {
    path: '',
    component: CalenderingplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderingplanningPageRoutingModule {}
