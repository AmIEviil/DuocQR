import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDOCPageRoutingModule } from './login-doc-routing.module';

import { LoginDOCPage } from './login-doc.page';

import { Routes,RouterModule } from '@angular/router';
const routes : Routes=[{
  path: '',
  component:LoginDOCPage,
  children: [
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
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
    LoginDOCPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginDOCPage]
})
export class LoginDOCPageModule {}
