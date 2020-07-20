import { Component, OnInit } from '@angular/core';
import { InicioSesionUsuariosService } from '../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import { Cliente } from '../../_modelos/cliente.model';

@Component({
  selector: 'app-encabezado-cliente',
  templateUrl: './encabezado-cliente.component.html',
  styleUrls: ['./encabezado-cliente.component.scss']
})
export class EncabezadoClienteComponent implements OnInit {
  usuarioActual:Cliente = <Cliente> this.inicioSesionService.usuarioActual;

  constructor(public inicioSesionService:InicioSesionUsuariosService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.inicioSesionService.cerrarSesion();
  }

}
