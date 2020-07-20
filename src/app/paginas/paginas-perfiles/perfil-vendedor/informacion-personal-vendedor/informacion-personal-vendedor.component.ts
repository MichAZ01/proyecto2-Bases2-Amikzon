import { Component, OnInit } from '@angular/core';
import { InicioSesionUsuariosService } from '../../../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendedor } from '../../../../_modelos/vendedor.model';

@Component({
  selector: 'app-informacion-personal-vendedor',
  templateUrl: './informacion-personal-vendedor.component.html',
  styleUrls: ['./informacion-personal-vendedor.component.scss']
})
export class InformacionPersonalVendedorComponent implements OnInit {
  usuarioActual:Vendedor = <Vendedor> this.inicioSesionService.usuarioActual;

  constructor(public inicioSesionService: InicioSesionUsuariosService, private router: Router, public route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
  }

  

  

}

