import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'estu',
    loadChildren: () => import('./pages/estu/estu.module').then( m => m.EstuPageModule)
  },
  {
    path: 'docen',
    loadChildren: () => import('./pages/docen/docen.module').then( m => m.DocenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'login-doc',
    loadChildren: () => import('./pages/login-doc/login-doc.module').then( m => m.LoginDOCPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./pages/scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'crear-qr',
    loadChildren: () => import('./pages/crear-qr/crear-qr.module').then( m => m.CrearQrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
