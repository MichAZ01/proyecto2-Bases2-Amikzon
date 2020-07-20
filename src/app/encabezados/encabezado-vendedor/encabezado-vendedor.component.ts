import { Component, OnInit } from '@angular/core';
import { InicioSesionUsuariosService } from '../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import { Vendedor } from '../../_modelos/vendedor.model';

@Component({
  selector: 'app-encabezado-vendedor',
  templateUrl: './encabezado-vendedor.component.html',
  styleUrls: ['./encabezado-vendedor.component.scss']
})
export class EncabezadoVendedorComponent implements OnInit {
  usuarioActual:Vendedor = <Vendedor> this.inicioSesionService.usuarioActual;

  constructor(public inicioSesionService:InicioSesionUsuariosService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.inicioSesionService.cerrarSesion();
  }

}
