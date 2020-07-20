import { Component, OnInit } from '@angular/core';
import { InicioSesionUsuariosService } from '../../../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../../_modelos/cliente.model';

@Component({
  selector: 'app-informacion-personal-cliente',
  templateUrl: './informacion-personal-cliente.component.html',
  styleUrls: ['./informacion-personal-cliente.component.scss']
})
export class InformacionPersonalClienteComponent implements OnInit {
  mapUrl: string = "";
  usuarioActual:Cliente = <Cliente> this.inicioSesionService.usuarioActual;

  constructor(public inicioSesionService: InicioSesionUsuariosService, private router: Router, public route: ActivatedRoute) {
    this.mapUrl = "https://maps.google.com/maps?q=";
    this.mapUrl += ((this.usuarioActual.getLatitud().toString()) + ",");
    this.mapUrl += ((this.usuarioActual.getLongitud().toString())+"&hl=es;z=14&amp;&output=embed");
   }

  ngOnInit(): void {
  }

}
