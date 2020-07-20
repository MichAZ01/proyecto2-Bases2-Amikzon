import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { ProductosService } from '../../_services/productos-service/productos.service';

@Component({
  selector: 'app-pagina-productos-visitante',
  templateUrl: './pagina-productos-visitante.component.html',
  styleUrls: ['./pagina-productos-visitante.component.scss']
})
export class PaginaProductosVisitanteComponent implements OnInit {
  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1
  };

  reverse: boolean = false;
  isDisabledAsc: boolean = false;
  isDisabledDesc: boolean = false;
  link: string = "current-product";
  predicate: string = "nombreProducto";
  nombreSucursalActual: String = "";

  constructor(public productosService:ProductosService, public orderPipe:OrderPipe) {
    this.reverse = false;
    this.isDisabledAsc = true;
   }

  ngOnInit(): void {
    this.productosService.obtenerProductosInventario(this.nombreSucursalActual, "", "",-1,-1);
  }

  sortAscending(){
    this.reverse = false;
    this.isDisabledAsc = true;
    this.isDisabledDesc = false;
  }

  sortDescending(){
    this.reverse = true;
    this.isDisabledAsc = false;
    this.isDisabledDesc = true;
  }

  verProducto(i: number){
  }

  verTodos(){
    this.productosService.obtenerProductosInventario(this.nombreSucursalActual, "", "",-1,-1);
  }

  buscarProductosInventario(){
    var contadorPrecios = 0;
    var nombreProducto = (<HTMLInputElement>document.getElementById("campo-nombre-producto")).value;
    var nombreCategoria = (<HTMLInputElement>document.getElementById("campo-categoria-producto")).value;
    var precioMinimo = Number((<HTMLInputElement>document.getElementById("campo-precio-minimo")).value);
    var precioMaximo = Number((<HTMLInputElement>document.getElementById("campo-precio-maximo")).value);
    if(precioMinimo == 0) {
      precioMinimo = -1;
      contadorPrecios += 1;
    }
    if(precioMinimo == 0) {
      precioMaximo = -1;
      contadorPrecios += 1;
    }
    if(nombreProducto != "" || nombreCategoria != "" || ((precioMinimo == -1 && precioMaximo == -1 && contadorPrecios == 2) ||
    precioMinimo > 0 && precioMaximo > 0 && (precioMinimo < precioMaximo))){
      this.productosService.obtenerProductosInventario(this.nombreSucursalActual, nombreProducto, nombreCategoria, precioMinimo, precioMaximo);
      this.config.currentPage = 1;
    }
  }

}
