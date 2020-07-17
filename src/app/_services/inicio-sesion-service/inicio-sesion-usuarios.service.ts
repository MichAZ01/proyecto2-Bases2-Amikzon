import { Injectable } from '@angular/core';
import { Usuario } from '../../_modelos/usuario.model';
import { Cliente } from '../../_modelos/cliente.model';
import { Vendedor } from '../../_modelos/vendedor.model';
import { Corporativo } from '../../_modelos/corporativo.model';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionUsuariosService {
  usuarioActual:Usuario = new Usuario("", "", "", "", "");

  constructor() {

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

  cerrarSesion(){
    this.usuarioActual = null;
  }
}
