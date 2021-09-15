import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenPage } from './docen.page';

const routes: Routes = [
  {
    path: '',
    component: DocenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenPageRoutingModule {}
