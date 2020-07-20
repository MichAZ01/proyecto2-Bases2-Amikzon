import { Injectable } from '@angular/core';
import { Usuario } from '../../_modelos/usuario.model';
import { Cliente } from '../../_modelos/cliente.model';
import { Vendedor } from '../../_modelos/vendedor.model';
import { Corporativo } from '../../_modelos/corporativo.model';
import { Apollo } from 'apollo-angular';
import { verificarUsuarioExiste } from '../../graphql/queries/queries/queries.module';
import { UsuarioEncontrado } from '../../graphql/types/types/types.module';
import { getDirecciones } from '../../graphql/queries/queries/queries.module';
import { Provincia } from '../../graphql/types/types/types.module';
import { Canton } from '../../graphql/types/types/types.module';
import { Distrito } from '../../graphql/types/types/types.module';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuariosService {
  public tiposID:String[] = [];
  public meses:String[] = [];
  public sucursales:String[] = [];
  public tipoUsuario:String = "";
  public nuevoUsuario:Usuario = new Usuario("", "", "", "", "");
  public defaultOpcion:String = "Seleccione una opción";
  public defaultOpcionSucursal:String = "Seleccione una sucursal";
  public Provincias: Provincia[] = [];

  constructor(private apollo: Apollo) { 
    this.tiposID.push("Física");
    this.tiposID.push("Jurídica");
    this.tiposID.push("DIMEX");

    this.meses.push("Enero");
    this.meses.push("Febrero");
    this.meses.push("Marzo");
    this.meses.push("Abril");
    this.meses.push("Mayo");
    this.meses.push("Junio");
    this.meses.push("Julio");
    this.meses.push("Agosto");
    this.meses.push("Septiembre");
    this.meses.push("Octubre");
    this.meses.push("Noviembre");
    this.meses.push("Diciembre");

    this.sucursales.push("Cartago");
    this.sucursales.push("Heredia");
    this.sucursales.push("San José");
  }

  public guardarNuevoUsuario(nombreUsuario:String, contrasenia:String, tipoID:String, identificacion:String, tipoUsuario:String){
    this.tipoUsuario = tipoUsuario;
    switch(tipoUsuario){
      case "cliente":
        this.nuevoUsuario = new Cliente(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
        break;
      case "vendedor":
        this.nuevoUsuario = new Vendedor(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
        break;
      case "corporativo":
        this.nuevoUsuario = new Corporativo(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
        break;
      default:
        this.nuevoUsuario = new Usuario("", "", "", "", "");
        break;
    }
  }

  public guardarInformacionPersonalUsuario(nombre:String, apellido1:String, apellido2:String, fechaNacimiento:String,
    telefono1:String, telefono2:String, sucursal:String){
      if(telefono2 == "") telefono2 = "N/A";

      if(this.tipoUsuario == "cliente"){
        (<Cliente> this.nuevoUsuario).guardarInformacionPersonal(nombre, apellido1, apellido2, fechaNacimiento, telefono1, telefono2);
      }
      else{
        (<Vendedor> this.nuevoUsuario).guardarInformacionPersonal(nombre, apellido1, apellido2, fechaNacimiento, telefono1, telefono2, sucursal);
      }

    }

    public modificarInformacionPrincipal(nombreUsuario:String, contrasenia:String, tipoID:String, identificacion:String, tipoUsuario:String){
      this.nuevoUsuario.modificarInformacion(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
    }

  public setUsuario(){
    this.nuevoUsuario = new Usuario("", "", "", "", "");
  }

  public getUsuarioPorTipo(){
    switch(this.tipoUsuario){
      case "cliente":
        return <Cliente> this.nuevoUsuario;
      case "vendedor":
        return <Vendedor> this.nuevoUsuario;
      case "corporativo":
        return <Corporativo> this.nuevoUsuario;
      default:
        break;
    } 
  }

  obtenerProvincias() {
    this.apollo.query({
      query: getDirecciones
    }).subscribe(result => {
      this.Provincias = result.data['getDirecciones'] as Provincia[];
    });
  }




}
