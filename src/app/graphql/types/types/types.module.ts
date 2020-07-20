import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TypesModule { }


export type Producto = {
  idProducto: number,
  nombreProducto: String,
  nombreCategoria: String,
  descripcion: String,
  precio: number,
  nombreEmpresa: String
}

export type Resultado = {
  responseMessage: String
}

export type UsuarioEncontrado = {
  identificacion: String,
  nombreUsuario: String
}

export type usuarioRegistrado = {
  nombreUsuario: String,
  contrasenia: String,
  tipoUsuario: String
}

export type Vendedor = {
  identificacion: String,
  tipoID: String,
  nombre: String,
  apellido1: String,
  apellido2: String,
  fechaNacimiento: String,
  telefono1: String,
  telefono2: String,
  nombreUsuario: String,
  contrasenia: String,
  tipoUsuario: String
  nombreSucursal: String
}

export type Cliente = {
  identificacion: String,
  tipoID: String,
  nombre: String,
  apellido1: String,
  apellido2: String,
  fechaNacimiento: String,
  telefono1: String,
  telefono2: String,
  provincia: String,
  canton: String,
  distrito: String,
  direccionExacta: String,
  latitud: Number,
  longitud: Number,
  nombreUsuario: String,
  contrasenia: String
}


export type ProductoInventario = {
  nombreProducto: String, 
  nombreCategoria: String,
  nombreEmpresa: String, 
  descripcion: String,
  precioCliente: Number,
  precioFinal: Number, 
  impuesto: Number, 
  cantidadExistencias: Number
}


export type Provincia = {
  provinciacod: String,
  provincia: String,
  cantones: [Canton]
}
export type Canton = {
  provinciacod: String,
  cantoncod: String,
  canton: String,
  distritos: [Distrito]
}
export type Distrito = {
  distritocod: String,
  distrito: String
}