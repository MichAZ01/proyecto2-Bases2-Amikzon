import { Component, OnInit } from '@angular/core';
import { RegistroUsuariosService } from '../../../_services/registro-service/registro-usuarios.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { verificarUsuarioExiste } from '../../../graphql/queries/queries/queries.module';
import { UsuarioEncontrado } from '../../../graphql/types/types/types.module';



@Component({
  selector: 'app-pagina-registro-principal',
  templateUrl: './pagina-registro-principal.component.html',
  styleUrls: ['./pagina-registro-principal.component.scss']
})
export class PaginaRegistroPrincipalComponent implements OnInit {
  tipoIDSeleccionada: String = "";
  tipoIDEsCorrecto: Boolean = true;
  nombreDeUsuarioVacio: Boolean = false;
  contraseniaVacia: Boolean = false;
  ConfirmacionContraseniaVacia: Boolean = false;
  contraseniasCoinciden: Boolean = true;
  identificacionVacia: Boolean = false;
  contraseniaAlfanumerica: Boolean = true;
  cantidadDigitosContraseniaCorrecto: Boolean = true;
  cantidadDigitosID: number = -1;
  cantidaDigitosIDCorrecto: Boolean = true;
  link: String = "registro-informacion-personal"
  selectUsuario: String = "";
  seEncontroExistenciaUsuario: Boolean = false;
  buscandoExistencia: boolean = false;

  constructor(public registroUsuariosService: RegistroUsuariosService,
    private router: Router, public route: ActivatedRoute, private apollo: Apollo) {
      
  }

  ngOnInit(): void {
    this.seleccionarElemento();
    this.modificarCantidadDigitosID();
  }

  seleccionarElemento(){
    if(this.registroUsuariosService.nuevoUsuario.getTipoID() != ""){
      this.selectUsuario = this.registroUsuariosService.nuevoUsuario.getTipoID();
      this.tipoIDSeleccionada = this.selectUsuario;
    }
    else{
      this.selectUsuario = this.registroUsuariosService.defaultOpcion;
    }
  }

  obtenerTipoID(opcionSeleccionada: string) {

    var opcionElemento = (<HTMLSelectElement>document.getElementById(opcionSeleccionada));
    var opcion = opcionElemento.options[opcionElemento.selectedIndex].value;
    this.tipoIDEsCorrecto = true;
    this.cantidaDigitosIDCorrecto = true;
    this.tipoIDSeleccionada = opcion;
    this.selectUsuario = this.tipoIDSeleccionada;
    this.modificarCantidadDigitosID();
    if (this.tipoIDSeleccionada == "Seleccione una opción"){
      this.registroUsuariosService.nuevoUsuario.setID("");
    }
  }

  modificarCantidadDigitosID(){
    switch(this.tipoIDSeleccionada){
      case "Física":
        this.cantidadDigitosID = 9;
        break;
      case "Jurídica":
        this.cantidadDigitosID = 10;
        break;
      case "DIMEX":
        this.cantidadDigitosID = 12;
        break;
      default:
        break;
    }
  }

  validarCamposRegistro(nombreUsuario: String, contrasenia: String, identificacion: String, confirmacionContrasenia: String) {
    this.tipoIDEsCorrecto = (this.tipoIDSeleccionada != "" && this.tipoIDSeleccionada != "Seleccione una opción") ? true : false;

    this.nombreDeUsuarioVacio = (nombreUsuario == "") ? true : false;

    this.contraseniaVacia = (contrasenia == "") ? true : false;

    this.ConfirmacionContraseniaVacia = (confirmacionContrasenia == "") ? true : false;

    this.identificacionVacia = (identificacion == "") ? true : false;
  }

  validarTipoContrasenia(contrasenia: String) {
    var letrasynumeros = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    this.contraseniaAlfanumerica = (contrasenia.match(letrasynumeros)) ? true : false; 
  }

  validarLargoContrasenia(contrasenia: String){
    this.cantidadDigitosContraseniaCorrecto = (contrasenia.length >= 8) ? true : false;
  }

  validarCoincidenciaContrasenias(contrasenia: string, confirmacionContrasenia: string){
    this.contraseniasCoinciden = (contrasenia.localeCompare(confirmacionContrasenia) == 0) ? true : false;
  }

  validarLargoID(identificacion:String){
    this.cantidaDigitosIDCorrecto = (identificacion.length == this.cantidadDigitosID) ? true : false;
  }

  obtenerCamposRegistro() {
    var _nombreUsuario = (<HTMLSelectElement>document.getElementById("campo-nombreUsuario")).value;
    var contrasenia = (<HTMLSelectElement>document.getElementById("campo-contrasenia")).value;
    var confirmacionContrasenia = (<HTMLSelectElement>document.getElementById("campo-confirmacion-contrasenia")).value;
    var _identificacion = (<HTMLSelectElement>document.getElementById("campo-identificacion")).value;
    var etiquetaOpcionUsuario = <HTMLSelectElement>document.getElementById('radio-group').getElementsByClassName('active');
    var tipoUsuario = etiquetaOpcionUsuario[0].getElementsByTagName("input")[0].value;
    this.validarCamposRegistro(_nombreUsuario, contrasenia, _identificacion, confirmacionContrasenia);
    this.validarLargoContrasenia(contrasenia);
    this.validarTipoContrasenia(contrasenia);
    this.validarLargoID(_identificacion);
    this.validarCoincidenciaContrasenias(contrasenia, confirmacionContrasenia);
    
    if (this.tipoIDEsCorrecto && !this.nombreDeUsuarioVacio && !this.contraseniaVacia && this.cantidadDigitosContraseniaCorrecto
      && this.contraseniaAlfanumerica && !this.identificacionVacia && this.cantidaDigitosIDCorrecto &&
      !this.ConfirmacionContraseniaVacia && this.contraseniasCoinciden  ) {
        
        this.validarExistenciaUsuario(_nombreUsuario, contrasenia, _identificacion, tipoUsuario);
      
    }

  }


  validarExistenciaUsuario(_nombreUsuario: String, contrasenia: String, _identificacion: String, tipoUsuario: String){
    this.buscandoExistencia = true;

    this.apollo.query({
      query: verificarUsuarioExiste,
      variables: {
        identificacion: _identificacion,
        nombreUsuario: _nombreUsuario
      }
    }).subscribe(result => {
      var resultado = result.data['verificarUsuarioExiste'] as UsuarioEncontrado[];
        if(resultado.length == 0 ) {
          
          if(this.registroUsuariosService.nuevoUsuario.getTipoUsuario() == ""){
            this.registroUsuariosService.guardarNuevoUsuario(_nombreUsuario, contrasenia, this.tipoIDSeleccionada, _identificacion, tipoUsuario);
          }
          else{
            this.registroUsuariosService.nuevoUsuario.modificarInformacion(_nombreUsuario, contrasenia, this.tipoIDSeleccionada, _identificacion, tipoUsuario);
          }
          this.seEncontroExistenciaUsuario = false;
          this.buscandoExistencia = false;
          this.router.navigate([this.link]);
        }
        else{
          this.seEncontroExistenciaUsuario = true;
          this.buscandoExistencia = false;
        }
    });
  }


}
