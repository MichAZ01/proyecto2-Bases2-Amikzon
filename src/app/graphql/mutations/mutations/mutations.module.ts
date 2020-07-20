import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import gql from "graphql-tag";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MutationsModule { }


export const agregarCliente = gql`
  mutation agregarCliente($identificacion: String, $tipoID: String, $nombre: String,
    $apellido1: String, $apellido2: String, $fechaNacimiento: String, $telefono1: String,
    $telefono2: String, $provincia: String, $canton: String, $distrito: String, 
    $direccionExacta: String, $latitud: Float, $longitud: Float, $nombreUsuario: String,
    $contrasenia: String, $tipoUsuario: String){
      agregarCliente(identificacion: $identificacion, tipoID: $tipoID,
      nombre: $nombre, apellido1: $apellido1, apellido2: $apellido2,
      fechaNacimiento: $fechaNacimiento, telefono1: $telefono1 , 
      telefono2: $telefono2, provincia: $provincia, canton: $canton,
      distrito: $distrito, direccionExacta: $direccionExacta, 
      latitud: $latitud, longitud: $longitud, nombreUsuario: $nombreUsuario,
      contrasenia: $contrasenia, tipoUsuario: $tipoUsuario){
        
        responseMessage 
      }          
  }
`;

export const agregarVendedor = gql`
mutation agregarVendedor($identificacion: String, $tipoID: String, $nombre: String, $apellido1: String, $apellido2: String,
$fechaNacimiento: String, $telefono1: String, $telefono2: String, $nombreSucursal: String, $nombreUsuario: String,
$contrasenia: String, $tipoUsuario: String){
	agregarVendedor(identificacion: $identificacion, tipoID: $tipoID, nombre: $nombre, apellido1: $apellido1, apellido2: $apellido2,
    fechaNacimiento: $fechaNacimiento, telefono1: $telefono1, telefono2: $telefono2, nombreSucursal: $nombreSucursal,
    nombreUsuario: $nombreUsuario, contrasenia: $contrasenia, tipoUsuario: $tipoUsuario){
    
    responseMessage 
  }          
}

`;
