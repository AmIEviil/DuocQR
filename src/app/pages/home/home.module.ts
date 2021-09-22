import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { Routes,RouterModule } from '@angular/router';
/*const routes : Routes=[{
  path: '',
  component:HomePage,
  children: [
    {
      path: 'login',
      loadChildren: () => import('../../pages/login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'login-doc',
      loadChildren: () => import('../../pages/login-doc/login-doc.module').then( m => m.LoginDOCPageModule)
    },
  ]
}]*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    //RouterModule.forChild(routes),
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
