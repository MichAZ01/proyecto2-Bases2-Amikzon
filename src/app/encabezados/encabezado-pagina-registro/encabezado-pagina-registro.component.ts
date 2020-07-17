import { Component, OnInit } from '@angular/core';
import { RegistroUsuariosService } from '../../_services/registro-service/registro-usuarios.service'

@Component({
  selector: 'app-encabezado-pagina-registro',
  templateUrl: './encabezado-pagina-registro.component.html',
  styleUrls: ['./encabezado-pagina-registro.component.scss']
})
export class EncabezadoPaginaRegistroComponent implements OnInit {

  constructor(public registroUsuariosService: RegistroUsuariosService) { }

  ngOnInit(): void {
  }

}
