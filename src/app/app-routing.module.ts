import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'Moulding',
    loadChildren: () => import('./moulding/moulding.module').then(m => m.MouldingPageModule)
  },
  {
    path: 'Setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  },
  {
    path: 'Widgets',
    loadChildren: () => import('./widgets/widgets.module').then( m => m.WidgetsPageModule)
  },
  {
    path: 'Planhome',
    loadChildren: () => import('./planhome/planhome.module').then( m => m.PlanhomePageModule)
  },
  {
    path: 'Reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'Deflashplanning',
    loadChildren: () => import('./deflashplanning/deflashplanning.module').then( m => m.DeflashplanningPageModule)
  },
  {
    path: 'Inspectionplanning',
    loadChildren: () => import('./inspectionplanning/inspectionplanning.module').then( m => m.InspectionplanningPageModule)
  },
  {
    path: 'Fetchdrawing',
    loadChildren: () => import('./fetchdrawing/fetchdrawing.module').then( m => m.FetchdrawingPageModule)
  },
  {
    path: 'Mouldingplanning',
    loadChildren: () => import('./mouldingplanning/mouldingplanning.module').then( m => m.MouldingplanningPageModule)
  },
  {
    path: 'Purchaseorderplanning',
    loadChildren: () => import('./purchaseorderplanning/purchaseorderplanning.module').then( m => m.PurchaseorderplanningPageModule)
  },
  {
    path: 'Mixingplanning',
    loadChildren: () => import('./mixingplanning/mixingplanning.module').then( m => m.MixingplanningPageModule)
  },
  {
    path: 'Finalplanning',
    loadChildren: () => import('./finalplanning/finalplanning.module').then( m => m.FinalplanningPageModule)
  },
  {
    path: 'Calenderingplanning',
    loadChildren: () => import('./calenderingplanning/calenderingplanning.module').then( m => m.CalenderingplanningPageModule)
  },
  {
    path: 'Dispatchplanning',
    loadChildren: () => import('./dispatchplanning/dispatchplanning.module').then( m => m.DispatchplanningPageModule)
  },
  {
    path: 'keytraceability',
    loadChildren: () => import('./keytraceability/keytraceability.module').then( m => m.KeytraceabilityPageModule)
  },
  {
    path: 'componentstock',
    loadChildren: () => import('./componentstock/componentstock.module').then( m => m.ComponentstockPageModule)
  },
  {
    path: 'compoundstock',
    loadChildren: () => import('./compoundstock/compoundstock.module').then( m => m.CompoundstockPageModule)
  },
  {
    path: 'rmstock',
    loadChildren: () => import('./rmstock/rmstock.module').then( m => m.RmstockPageModule)
  },
  {
    path: 'rollstock',
    loadChildren: () => import('./rollstock/rollstock.module').then( m => m.RollstockPageModule)
  },
  {
    path: 'approvals',
    loadChildren: () => import('./approvals/approvals.module').then( m => m.ApprovalsPageModule)
  },
  {
    path: 'rmqualitycheck',
    loadChildren: () => import('./rmqualitycheck/rmqualitycheck.module').then( m => m.RmqualitycheckPageModule)
  },
  {
    path: 'compoundapproval',
    loadChildren: () => import('./compoundapproval/compoundapproval.module').then( m => m.CompoundapprovalPageModule)
  },
  {
    path: 'dimensionentry',
    loadChildren: () => import('./dimensionentry/dimensionentry.module').then( m => m.DimensionentryPageModule)
  },
  {
    path: 'stockadjustment',
    loadChildren: () => import('./stockadjustment/stockadjustment.module').then( m => m.StockadjustmentPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
