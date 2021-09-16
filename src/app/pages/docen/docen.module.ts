import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenPageRoutingModule } from './docen-routing.module';

import { DocenPage } from './docen.page';
import { Routes,RouterModule } from '@angular/router';
const routes : Routes=[{
  path: '',
  component:DocenPage,
  children: [
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'crear-qr',
      loadChildren: () => import('../crear-qr/crear-qr.module').then( m => m.CrearQrPageModule)
    },
    {
      path: 'login-doc',
      loadChildren: () => import('../login-doc/login-doc.module').then( m => m.LoginDOCPageModule)
    },
  ]
}]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DocenPage]
})
export class DocenPageModule {}
