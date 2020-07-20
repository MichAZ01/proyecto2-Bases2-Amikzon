import { Component, OnInit } from '@angular/core';
import { InicioSesionUsuariosService } from '../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import { Cliente } from '../../_modelos/cliente.model';

@Component({
  selector: 'app-encabezado-cliente-productos',
  templateUrl: './encabezado-cliente-productos.component.html',
  styleUrls: ['./encabezado-cliente-productos.component.scss']
})
export class EncabezadoClienteProductosComponent implements OnInit {
  usuarioActual:Cliente = <Cliente> this.inicioSesionService.usuarioActual;

  constructor(public inicioSesionService:InicioSesionUsuariosService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.inicioSesionService.cerrarSesion();
  }
}
