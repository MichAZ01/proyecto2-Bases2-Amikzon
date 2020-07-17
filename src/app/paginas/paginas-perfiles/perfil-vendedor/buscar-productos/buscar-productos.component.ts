import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { ProductosService } from '../../../../_services/productos-service/productos.service';

@Component({
  selector: 'app-buscar-productos',
  templateUrl: './buscar-productos.component.html',
  styleUrls: ['./buscar-productos.component.scss']
})
export class BuscarProductosComponent implements OnInit {
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

  constructor(public productosService:ProductosService, public orderPipe:OrderPipe) {
    this.reverse = false;
    this.isDisabledAsc = true;
   }

  ngOnInit(): void {
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

  buscarProductos(){
    
  }

}
