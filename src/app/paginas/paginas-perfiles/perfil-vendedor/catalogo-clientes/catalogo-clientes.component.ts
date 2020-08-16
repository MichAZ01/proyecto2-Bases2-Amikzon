import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../../../../_services/vendedor-service/vendedor.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Cliente } from 'src/app/graphql/types/types/types.module';

@Component({
  selector: 'app-catalogo-clientes',
  templateUrl: './catalogo-clientes.component.html',
  styleUrls: ['./catalogo-clientes.component.scss']
})
export class CatalogoClientesComponent implements OnInit {
  config = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1
  };
  predicate: string;
  reverse: boolean;
  indexCliente: number;
  clienteActual: Cliente;
  contraseniaOculta: boolean;
  vistaInformacionPersonal: boolean;

  constructor(public vendedorService: VendedorService, public orderPipe: OrderPipe) {
    this.predicate = "nombre";
    this.reverse = false;
    this.indexCliente = -1;
    this.contraseniaOculta = true;
    this.vistaInformacionPersonal = true;
  }

  ngOnInit(): void {
    this.vendedorService.ordenarListaClientesPorNombre(this.reverse);
  }

  ordenarPor(nombreColumna: string) {
    this.reverse = (this.reverse == true) ? false : true;

    this.predicate = nombreColumna;

    this.vendedorService.ordenarListaClientesPorNombre(this.reverse);

  }

  setIndex(index: number) {
    this.indexCliente = index;
  }

  eliminarCliente() {
    this.vendedorService.catalogoClientes.splice(this.indexCliente, 1);
  }

  mostrarContrasenia() {
    var tipo = <HTMLInputElement>document.getElementById("password");
    if (tipo.type == "password") {
      tipo.type = "text";
      this.contraseniaOculta = false;
    } else {
      tipo.type = "password";
      this.contraseniaOculta = true;
    }
  }

  cambiarVistaModalInformacion(){
    this.vistaInformacionPersonal = (this.cambiarVistaModalInformacion) ? false: true;
  }

  crearCliente() {

  }


}
