import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getProductos } from '../../graphql/queries/queries/queries.module';
import { Producto } from '../../graphql/types/types/types.module';
import { getProductosInventario } from '../../graphql/queries/queries/queries.module';
import { ProductoInventario } from '../../graphql/types/types/types.module';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos:Producto[] = [];
  seEncontraronProductos:Boolean = true;
  productosInventario:ProductoInventario[] = [];
  seEncontraronProductosInventario:Boolean = true;

  constructor(private apollo: Apollo) {

  }

  obtenerProductos(_nombreSucursal:String, _nombreProveedor:String, _nombreCategoria:String) {
    this.apollo.query({
      query: getProductos,
      variables: {
        nombreSucursal: _nombreSucursal,
        nombreProveedor: _nombreProveedor,
        nombreCategoria: _nombreCategoria
      }
    }).subscribe(result => {
      var resultadoProductos = result.data['getProductos'] as Producto[];
        if(resultadoProductos.length > 0 ) {
          this.productos = resultadoProductos;
          this.seEncontraronProductos = true;
        }
        else {
          this.productos = [];
          this.seEncontraronProductos = false;
        }
    });
  }

  obtenerProductosInventario(_nombreSucursal:String, _nombreProducto:String, _nombreCategoria:String, _precioMin:number, _precioMax:number) {
    this.apollo.query({
      query: getProductosInventario,
      variables: {
        nombreSucursal: _nombreSucursal,
        nombreProducto: _nombreProducto,
        nombreCategoria: _nombreCategoria,
        precioMin: _precioMin,
        precioMax: _precioMax
      }
    }).subscribe(result => {
      var resultadoProductos = result.data['getProductosInventario'] as ProductoInventario[];
        if(resultadoProductos.length > 0 ) {
          this.productosInventario = resultadoProductos;
          this.seEncontraronProductosInventario = true;
        }
        else {
          this.productosInventario = [];
          this.seEncontraronProductosInventario = false;
        }
    });
  }

}
  
