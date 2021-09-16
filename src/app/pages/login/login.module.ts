import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { Routes,RouterModule } from '@angular/router';
const routes : Routes=[{
  path: '',
  component:LoginPage,
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
    ReactiveFormsModule,
    RouterModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
