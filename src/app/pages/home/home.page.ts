import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor: String = "Hola Mundo";

  constructor() { }

  persona = new FormGroup({
    elUsuario: new FormControl(''),
    elContraseña: new FormControl('')
  })
  //Creacion de arreglo
  lista_persona = new Array();
  perso: any;

  grabar() {
    /*this.perso = {
      usuario: this.persona.controls.elUsuario.value,
      contraseña: this.persona.controls.elContraseña.value,
    };
    //console.log(this.perso);
    this.lista_persona.push(this.perso);
    var datos = this.lista_persona;
    localStorage.setItem('misdatos', JSON.stringify(datos));
    alert("Grabo");*/
  }
  eliminar() { }

  listar() { }

}
