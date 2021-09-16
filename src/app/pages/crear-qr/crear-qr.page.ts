import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-crear-qr',
  templateUrl: './crear-qr.page.html',
  styleUrls: ['./crear-qr.page.scss'],
})
export class CrearQrPage implements OnInit {
  qrData = "http://www.facebook.cl";
  elementType: 'url' | 'img' | 'canvas' = 'canvas'
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

}

