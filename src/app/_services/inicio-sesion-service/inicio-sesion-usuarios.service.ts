import { Injectable } from '@angular/core';
import { Usuario } from '../../_modelos/usuario.model';
import { Cliente } from '../../_modelos/cliente.model';
import { Vendedor } from '../../_modelos/vendedor.model';
import { Corporativo } from '../../_modelos/corporativo.model';
import { verificarContrasenia } from '../../graphql/queries/queries/queries.module';
import { usuarioRegistrado } from '../../graphql/types/types/types.module';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionUsuariosService {
  usuarioActual:Usuario = new Usuario("", "", "", "", "");

  constructor(private apollo: Apollo) {

   }

  setUsuarioActual(usuario:any){
    this.usuarioActual = usuario;
  }

  getUsuarioActualSegunTipo(){
    switch(this.usuarioActual.getTipoUsuario()){
      case "cliente":
        var cliente:Cliente = <Cliente> this.usuarioActual;
        return cliente;
      case "vendedor":
        var vendedor:Vendedor = <Vendedor> this.usuarioActual;
        return vendedor;
      case "corporativo":
        var corporativo:Corporativo = <Corporativo> this.usuarioActual;
        return corporativo;
      default:
        return null;
    }
  }

  getDigitoRandom() {
    return Math.random() * (100 - 1) + 1;
  }

  cerrarSesion(){
    this.usuarioActual = new Usuario("", "", "", "", "");
  }

  public guardarUsuario(identificacion: String, tipoID: String, nombre: String, apellido1: String, apellido2: String,
    fechaNacimiento: String, telefono1: String, telefono2: String, nombreUsuario: String, contrasenia: String,
     tipoUsuario: String, nombreSucursal: String, provincia: String, canton: String, distrito: String, direccionExacta: String,
     latitud: Number, longitud: Number){
    
    switch(tipoUsuario){
      case "cliente":
        this.usuarioActual = new Cliente(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
        (<Cliente>this.usuarioActual).guardarInformacionPersonal(nombre, apellido1, apellido2, fechaNacimiento, telefono1, telefono2);
        (<Cliente>this.usuarioActual).guardarDireccion(provincia, canton, distrito, direccionExacta, latitud, longitud)
        break;
      case "vendedor":
        this.usuarioActual = new Vendedor(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
        (<Vendedor>this.usuarioActual).guardarInformacionPersonal(nombre, apellido1, apellido2, fechaNacimiento, telefono1, telefono2, nombreSucursal)
        break;
      case "corporativo":
        this.usuarioActual = new Corporativo(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
        (<Vendedor>this.usuarioActual).guardarInformacionPersonal(nombre, apellido1, apellido2, fechaNacimiento, telefono1, telefono2, nombreSucursal)
        break;
      default:
        this.usuarioActual = new Usuario("", "", "", "", "");
        break;
    }
  }
  
  
}
