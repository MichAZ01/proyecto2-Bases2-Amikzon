import { Component, OnInit } from '@angular/core';
import { InicioSesionUsuariosService } from '../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import { Vendedor } from '../../_modelos/vendedor.model';

@Component({
  selector: 'app-encabezado-corporativo',
  templateUrl: './encabezado-corporativo.component.html',
  styleUrls: ['./encabezado-corporativo.component.scss']
})
export class EncabezadoCorporativoComponent implements OnInit {
  usuarioActual:Vendedor = <Vendedor> this.inicioSesionService.usuarioActual;

  constructor(public inicioSesionService:InicioSesionUsuariosService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.inicioSesionService.cerrarSesion();
  }
}
