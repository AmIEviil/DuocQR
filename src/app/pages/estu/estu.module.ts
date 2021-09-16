import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstuPageRoutingModule } from './estu-routing.module';

import { EstuPage } from './estu.page';
import { Routes,RouterModule } from '@angular/router';
const routes : Routes=[{
  path: '',
  component:EstuPage,
  children: [
    {
      path: 'home',
      loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('../../pages/login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'login-doc',
      loadChildren: () => import('../../pages/login-doc/login-doc.module').then( m => m.LoginDOCPageModule)
    },
  ]
}]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstuPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstuPage]
})
export class EstuPageModule {}
