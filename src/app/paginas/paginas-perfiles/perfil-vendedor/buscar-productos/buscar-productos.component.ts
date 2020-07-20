import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { ProductosService } from '../../../../_services/productos-service/productos.service';
import { InicioSesionUsuariosService } from '../../../../_services/inicio-sesion-service/inicio-sesion-usuarios.service';
import { Vendedor } from '../../../../_modelos/vendedor.model';

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
  nombreSucursalActual: String = "";

  constructor(public productosService:ProductosService, public orderPipe:OrderPipe, 
    public inicioSesionService: InicioSesionUsuariosService) {
    this.reverse = false;
    this.isDisabledAsc = true;
    this.nombreSucursalActual = (<Vendedor> this.inicioSesionService.usuarioActual).getSucursal();
   }

  ngOnInit(): void {
    this.productosService.obtenerProductos(this.nombreSucursalActual, "", "");
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
    var contadorPrecios = 0;
    var nombreProveedor = (<HTMLInputElement>document.getElementById("campo-nombre-proveedor")).value;
    var nombreCategoria = (<HTMLInputElement>document.getElementById("campo-categoria-producto")).value;

    if(nombreProveedor != "" || nombreCategoria != "" ){
      this.productosService.obtenerProductos(this.nombreSucursalActual, nombreProveedor, nombreCategoria);
      this.config.currentPage = 1;
    }

  }

  verTodos(){
    this.productosService.obtenerProductos(this.nombreSucursalActual, "", "");
  }

}
