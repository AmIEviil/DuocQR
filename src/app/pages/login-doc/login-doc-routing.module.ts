import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDOCPage } from './login-doc.page';

const routes: Routes = [
  {
    path: '',
    component: LoginDOCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginDOCPageRoutingModule {}
