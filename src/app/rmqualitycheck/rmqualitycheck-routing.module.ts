import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmqualitycheckPage } from './rmqualitycheck.page';

const routes: Routes = [
  {
    path: '',
    component: RmqualitycheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmqualitycheckPageRoutingModule {}
