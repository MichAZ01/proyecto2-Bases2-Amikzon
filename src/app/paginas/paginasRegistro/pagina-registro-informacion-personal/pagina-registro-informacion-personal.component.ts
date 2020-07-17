import { Component, OnInit } from '@angular/core';
import { RegistroUsuariosService } from '../../../_services/registro-service/registro-usuarios.service'
import { Router, ActivatedRoute } from '@angular/router';
import { InicioSesionUsuariosService } from '../../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import {Vendedor} from '../../../_modelos/vendedor.model'

@Component({
  selector: 'app-pagina-registro-informacion-personal',
  templateUrl: './pagina-registro-informacion-personal.component.html',
  styleUrls: ['./pagina-registro-informacion-personal.component.scss']
})
export class PaginaRegistroInformacionPersonalComponent implements OnInit {
  linkAnterior:String = "registro";
  linkSiguiente:String = "";
  nombreVacio:Boolean = false;
  apellido1Vacio:Boolean = false;
  apellido2Vacio:Boolean = false;
  fechaNacimientoVacia:Boolean = false;
  telefono1Vacio:Boolean = false;
  sucursalSeleccionadaCorrecta: Boolean = true;
  sucursalSeleccionada:String = "";
  sucursalOpcion:String = "";
  defaultOpcion:String = "Seleccione una sucursal";

  constructor(public registroUsuariosService: RegistroUsuariosService, public inicioSesionService: InicioSesionUsuariosService,
    private router: Router, public route: ActivatedRoute) {
      
     }

  ngOnInit(): void {
    if(this.registroUsuariosService.nuevoUsuario.getTipoUsuario().toString() != "cliente"){
      this.seleccionarElemento();
    }
  }

  seleccionarElemento(){
    if((<Vendedor> this.registroUsuariosService.nuevoUsuario).getSucursal() != ""){
      this.sucursalOpcion = (<Vendedor> this.registroUsuariosService.nuevoUsuario).getSucursal().toString();
      this.sucursalSeleccionada = this.sucursalOpcion;
    }
    else{
      this.sucursalOpcion = this.registroUsuariosService.defaultOpcionSucursal  ;
    }
  }

  paginaAnterior(){
    this.router.navigate([this.linkAnterior]);
  }

  obtenerSucursalSeleccionada(opcionSeleccionada:string){
    var opcionElemento = (<HTMLSelectElement>document.getElementById(opcionSeleccionada));
    var opcion = opcionElemento.options[opcionElemento.selectedIndex].value;
    this.sucursalSeleccionada = opcion;
    this.sucursalOpcion = this.sucursalSeleccionada;
  }

  validarCamposRegistroInformacion(nombre: String, apellido1: String, apellido2: String, fechaNacimiento: String,
     telefono1: String) {

    var tipoUsuario:String = this.registroUsuariosService.nuevoUsuario.getTipoUsuario();
    if(tipoUsuario != "cliente") {
      this.sucursalSeleccionadaCorrecta = (this.sucursalSeleccionada != "" 
      && this.sucursalSeleccionada != "Seleccione una sucursal") ? true : false;
    }

    this.nombreVacio = (nombre == "") ? true : false;

    this.apellido1Vacio = (apellido1 == "") ? true : false;

    this.apellido2Vacio = (apellido2 == "") ? true : false;

    this.fechaNacimientoVacia = (fechaNacimiento == "") ? true : false;
    
    this.telefono1Vacio = (telefono1 == "") ? true : false;
  }

  obtenerCamposRegistro() {
    var nombre = (<HTMLSelectElement>document.getElementById("campo-nombre")).value;
    var apellido1 = (<HTMLSelectElement>document.getElementById("campo-apellido1")).value;
    var apellido2 = (<HTMLSelectElement>document.getElementById("campo-apellido2")).value;
    var fechaNacimiento = (<HTMLSelectElement>document.getElementById("campo-fecha-nacimiento")).value;
    var telefono1 = (<HTMLSelectElement>document.getElementById("campo-telefono1")).value;
    var telefono2 = (<HTMLSelectElement>document.getElementById("campo-telefono2")).value;
    this.validarCamposRegistroInformacion(nombre, apellido1, apellido2, fechaNacimiento, telefono1);

    if(!this.nombreVacio && !this.apellido1Vacio && !this.apellido2Vacio && !this.fechaNacimientoVacia &&
      !this.telefono1Vacio && this.sucursalSeleccionadaCorrecta){
        this.registroUsuariosService.guardarInformacionPersonalUsuario(nombre, apellido1, apellido2,
          fechaNacimiento, telefono1, telefono2, this.sucursalSeleccionada);

          var tipoUsuarioActual = this.registroUsuariosService.nuevoUsuario.getTipoUsuario().toString();
          if( tipoUsuarioActual == "vendedor" || tipoUsuarioActual == "corporativo"){
            //Incluir instrucción para almacenar en la base de datos
            this.inicioSesionService.usuarioActual = this.registroUsuariosService.nuevoUsuario;
          }

          this.redireccionarSegunTipoUsuario();
      }

  }

  redireccionarSegunTipoUsuario(){
    var ruta:String = "";
    switch(this.registroUsuariosService.tipoUsuario){
      case "cliente":
        ruta = "registro-direccion";
        break;
      case "vendedor":
        ruta = "perfil-vendedor-informacionPersonal";
        break;
      case "corporativo":
        ruta = "perfil-corporativo-informacionPersonal";
        break;
      default:
        break;
    }
    this.router.navigate([ruta]);
  }

}
