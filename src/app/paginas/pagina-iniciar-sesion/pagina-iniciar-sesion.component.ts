import { Component, OnInit } from '@angular/core';
import { verificarContrasenia } from '../../graphql/queries/queries/queries.module';
import { usuarioRegistrado } from '../../graphql/types/types/types.module';
import { Apollo } from 'apollo-angular';
import { verCliente } from '../../graphql/queries/queries/queries.module';
import { Cliente } from '../../graphql/types/types/types.module';
import { verVendedor } from '../../graphql/queries/queries/queries.module';
import { Vendedor } from '../../graphql/types/types/types.module';
import { InicioSesionUsuariosService } from '../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import { ClienteService } from '../../_services/cliente-service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-iniciar-sesion',
  templateUrl: './pagina-iniciar-sesion.component.html',
  styleUrls: ['./pagina-iniciar-sesion.component.scss']
})
export class PaginaIniciarSesionComponent implements OnInit {
  nombreDeUsuarioVacio:Boolean = false;
  contraseniaVacia:Boolean = false;
  usuarioRegistrado: Boolean = true;
  verificandoUsuario: Boolean = false;
  usuarioInicio: usuarioRegistrado;

  constructor(private apollo: Apollo, public inicioSesionService: InicioSesionUsuariosService, 
    public clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  validarCamposInicioSesion(nombreUsuario:String, contrasenia:String){
    this.nombreDeUsuarioVacio = (nombreUsuario == "") ? true : false;

    this.contraseniaVacia = (contrasenia == "") ? true : false;
  }

  ObtenerCamposInicioSesion(){
    this.usuarioRegistrado = true;
    var nombreUsuario = (<HTMLInputElement>document.getElementById("campoNombreUsuario")).value;
    var contrasenia = (<HTMLInputElement>document.getElementById("campoContrasenia")).value;
    this.validarCamposInicioSesion(nombreUsuario, contrasenia)
    
    if(!this.nombreDeUsuarioVacio && !this.contraseniaVacia){
      this.validarUsuario(contrasenia, nombreUsuario);
    }
  
  }

  validarUsuario(_contrasenia: String, _nombreUsuario: String){
    if(this.inicioSesionService.usuarioActual.getContrasenia() == _contrasenia 
    && this.inicioSesionService.usuarioActual.getNombreUsuario() == _nombreUsuario) {
      this.usuarioRegistrado = true;
      let ruta = "perfil-vendedor-informacionPersonal";
      this.router.navigate([ruta]);
    }
    //this.verificandoUsuario = true;
    /*this.apollo.query({
      query: verificarContrasenia,
      variables: {
        contrasenia: _contrasenia,
        nombreUsuario: _nombreUsuario
      }
    }).subscribe(result => {
      this.usuarioInicio = result.data['verificarContrasenia'] as usuarioRegistrado;
      //this.usuarioInicio = JSON.parse(JSON.stringify(this.usuarioInicio));
        if(this.usuarioInicio != null) {
          if(this.usuarioInicio.tipoUsuario == "cliente") this.extraerInformacionCliente(_contrasenia, _nombreUsuario);
          
           else this.extraerInformacionVendedor(_contrasenia, _nombreUsuario);
        }
        else {
          this.usuarioRegistrado = false;
          this.verificandoUsuario = false;
        }
    });*/
  }

  extraerInformacionCliente(_contrasenia: String, _nombreUsuario: String){
    this.apollo.query({
      query: verCliente,
      variables: {
        contrasenia: _contrasenia,
        nombreUsuario: _nombreUsuario
      }
    }).subscribe(result => {
      var resultado = result.data['verCliente'] as Cliente;
        if(resultado != null) {
          this.usuarioRegistrado = true;
          this.verificandoUsuario = false;
          this.inicioSesionService.guardarUsuario(resultado.identificacion, resultado.tipoID, resultado.nombre, resultado.apellido1,
            resultado.apellido2, resultado.fechaNacimiento, resultado.telefono1, resultado.telefono2, resultado.nombreUsuario,
            resultado.contrasenia, this.usuarioInicio.tipoUsuario, "", resultado.provincia, resultado.canton, resultado.distrito,
            resultado.direccionExacta, resultado.latitud, resultado.longitud);
          this.redireccionarSegunTipoUsuario();
        }
        else {
          this.usuarioRegistrado = false;
          this.verificandoUsuario = false;
        }
    });
  }

  extraerInformacionVendedor(_contrasenia: String, _nombreUsuario: String){
    this.apollo.query({
      query: verVendedor,
      variables: {
        contrasenia: _contrasenia,
        nombreUsuario: _nombreUsuario
      }
    }).subscribe(result => {
      var resultado = result.data['verVendedor'] as Vendedor;
        if(resultado != null) {
          this.usuarioRegistrado = true;
          this.verificandoUsuario = false;
          this.inicioSesionService.guardarUsuario(resultado.identificacion, resultado.tipoID, resultado.nombre, resultado.apellido1,
            resultado.apellido2, resultado.fechaNacimiento, resultado.telefono1, resultado.telefono2, resultado.nombreUsuario,
            resultado.contrasenia, this.usuarioInicio.tipoUsuario, resultado.nombreSucursal, "", "", "", "", -1, -1);
          this.redireccionarSegunTipoUsuario();
        }
        else {
          this.usuarioRegistrado = false;
          this.verificandoUsuario = false;
        }
    });
  }

  redireccionarSegunTipoUsuario(){
    var ruta:String = "";
    switch(this.usuarioInicio.tipoUsuario){
      case "cliente":
        if(this.clienteService.seConsultaronProductos) ruta = "buscar-productos-cliente"
        else ruta = "perfil-cliente-informacionPersonal";
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

