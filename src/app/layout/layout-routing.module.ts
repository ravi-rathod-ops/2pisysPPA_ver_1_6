import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomePage } from '../home/home.page';
import { SettingComponent } from '../setting/setting.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
     children: [
      { path: 'home', component: HomePage },
      { path: 'settings', component: SettingComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
