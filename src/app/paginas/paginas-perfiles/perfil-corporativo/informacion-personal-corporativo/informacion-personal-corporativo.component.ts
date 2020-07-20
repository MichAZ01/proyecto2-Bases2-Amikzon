import { Component, OnInit } from '@angular/core';
import { InicioSesionUsuariosService } from '../../../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendedor } from '../../../../_modelos/vendedor.model';

@Component({
  selector: 'app-informacion-personal-corporativo',
  templateUrl: './informacion-personal-corporativo.component.html',
  styleUrls: ['./informacion-personal-corporativo.component.scss']
})
export class InformacionPersonalCorporativoComponent implements OnInit {
  usuarioActual:Vendedor = <Vendedor> this.inicioSesionService.usuarioActual;

  constructor(public inicioSesionService: InicioSesionUsuariosService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
