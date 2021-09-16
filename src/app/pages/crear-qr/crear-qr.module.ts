import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearQrPageRoutingModule } from './crear-qr-routing.module';

import { CrearQrPage } from './crear-qr.page';

import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearQrPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [CrearQrPage]
})
export class CrearQrPageModule {}
