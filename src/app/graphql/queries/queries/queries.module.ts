import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import gql from "graphql-tag";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class QueriesModule { }

export const getProductos = gql`
query getProductos($nombreSucursal: String, $nombreProveedor: String, $nombreCategoria: String){
  getProductos(nombreSucursal: $nombreSucursal, nombreProveedor: $nombreProveedor, nombreCategoria: $nombreCategoria){
    idProducto
    nombreProducto
    nombreCategoria
    descripcion
    precio
    nombreEmpresa
  }
}
`;

export const getProductosInventario = gql`
query getProductosInventario($nombreSucursal: String, $nombreProducto: String, $nombreCategoria: String, $precioMin: Float, $precioMax: Float){
  getProductosInventario(nombreSucursal: $nombreSucursal, nombreProducto: $nombreProducto, nombreCategoria: $nombreCategoria,
  	precioMin: $precioMin, precioMax: $precioMax){
    idProducto
    nombreProducto
    nombreCategoria
    descripcion
    precio
    nombreEmpresa
  }
}
`;

export const verificarUsuarioExiste = gql`
query verificarUsuarioExiste($identificacion: String, $nombreUsuario: String){
  verificarUsuarioExiste(identificacion: $identificacion, nombreUsuario: $nombreUsuario){
    identificacion
    nombreUsuario
  }
}
`;

export const verificarContrasenia = gql`
query verificarContrasenia($contrasenia: String, $nombreUsuario: String){
  verificarContrasenia(contrasenia: $contrasenia, nombreUsuario: $nombreUsuario){
    nombreUsuario
    contrasenia
    tipoUsuario
  }
}
`;

export const verVendedor = gql`
query verVendedor($contrasenia: String, $nombreUsuario: String){
  verVendedor(contrasenia: $contrasenia, nombreUsuario: $nombreUsuario){
    identificacion
    tipoID
    nombre
    apellido1
    apellido2
    fechaNacimiento
    telefono1
    telefono2
    nombreUsuario
    contrasenia
    tipoUsuario
    nombreSucursal
  }
}
`;

export const verCliente = gql`
query verCliente($contrasenia: String, $nombreUsuario: String){
  verCliente(contrasenia: $contrasenia, nombreUsuario: $nombreUsuario){
    identificacion
    tipoID
    nombre
    apellido1
    apellido2
    fechaNacimiento
    telefono1
    telefono2
    provincia
    canton
    distrito
    direccionExacta
    latitud
    longitud
    nombreUsuario
    contrasenia   
  }
}
`;

export const getDirecciones = gql `
query getDirecciones{
  getDirecciones{
    provinciacod
        provincia
        cantones{
          provinciacod
          cantoncod
          canton
          distritos{
            distritocod
        		distrito
          }
        }
    
  }
}
`;