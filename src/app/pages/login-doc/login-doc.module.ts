import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDOCPageRoutingModule } from './login-doc-routing.module';

import { LoginDOCPage } from './login-doc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDOCPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginDOCPage]
})
export class LoginDOCPageModule {}
