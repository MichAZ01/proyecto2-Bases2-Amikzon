import { Component, OnInit } from '@angular/core';
import { RegistroUsuariosService } from '../../../_services/registro-service/registro-usuarios.service'
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(public registroUsuariosService: RegistroUsuariosService,
    private router: Router, public route: ActivatedRoute) {
      
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
    var nombreUsuario = (<HTMLSelectElement>document.getElementById("campo-nombreUsuario")).value;
    var contrasenia = (<HTMLSelectElement>document.getElementById("campo-contrasenia")).value;
    var confirmacionContrasenia = (<HTMLSelectElement>document.getElementById("campo-confirmacion-contrasenia")).value;
    var identificacion = (<HTMLSelectElement>document.getElementById("campo-identificacion")).value;
    var etiquetaOpcionUsuario = <HTMLSelectElement>document.getElementById('radio-group').getElementsByClassName('active');
    var tipoUsuario = etiquetaOpcionUsuario[0].getElementsByTagName("input")[0].value;
    this.validarCamposRegistro(nombreUsuario, contrasenia, identificacion, confirmacionContrasenia);
    this.validarLargoContrasenia(contrasenia);
    this.validarTipoContrasenia(contrasenia);
    this.validarLargoID(identificacion);
    this.validarCoincidenciaContrasenias(contrasenia, confirmacionContrasenia);
    if (this.tipoIDEsCorrecto && !this.nombreDeUsuarioVacio && !this.contraseniaVacia && this.cantidadDigitosContraseniaCorrecto
      && this.contraseniaAlfanumerica && !this.identificacionVacia && this.cantidaDigitosIDCorrecto &&
      !this.ConfirmacionContraseniaVacia && this.contraseniasCoinciden  ) {

      if(this.registroUsuariosService.nuevoUsuario.getTipoUsuario() == ""){
        this.registroUsuariosService.guardarNuevoUsuario(nombreUsuario, contrasenia, this.tipoIDSeleccionada, identificacion, tipoUsuario);
      }
      else{
        this.registroUsuariosService.nuevoUsuario.modificarInformacion(nombreUsuario, contrasenia, this.tipoIDSeleccionada, identificacion, tipoUsuario);
      }

      this.router.navigate([this.link]);
      
    }

  }


}
