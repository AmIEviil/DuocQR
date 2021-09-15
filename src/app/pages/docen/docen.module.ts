import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenPageRoutingModule } from './docen-routing.module';

import { DocenPage } from './docen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenPageRoutingModule
  ],
  declarations: [DocenPage]
})
export class DocenPageModule {}
