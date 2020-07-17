import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pagina-iniciar-sesion',
  templateUrl: './pagina-iniciar-sesion.component.html',
  styleUrls: ['./pagina-iniciar-sesion.component.scss']
})
export class PaginaIniciarSesionComponent implements OnInit {
  nombreDeUsuarioVacio:Boolean = false;
  contraseniaVacia:Boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  validarCamposInicioSesion(nombreUsuario:String, contrasenia:String){
    this.nombreDeUsuarioVacio = (nombreUsuario == "") ? true : false;

    this.contraseniaVacia = (contrasenia == "") ? true : false;
  }

  ObtenerCamposInicioSesion(){
    var nombreUsuario = (<HTMLInputElement>document.getElementById("campoNombreUsuario")).value;
    var contrasenia = (<HTMLInputElement>document.getElementById("campoContrasenia")).value;
    this.validarCamposInicioSesion(nombreUsuario, contrasenia)
      
  
  }

}

