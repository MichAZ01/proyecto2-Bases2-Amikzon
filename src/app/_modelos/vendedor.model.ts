import { Usuario } from './usuario.model';

export class Vendedor extends Usuario {
    private sucursal: String = "";

    constructor(nombreUsuario: String, contrasenia: String, tipoID: String, identificacion: String, tipoUsuario: String) {
        super(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
    }


    public getSucursal() {
        return this.sucursal;
    }

    public setSucursal(sucursal: String) {
        this.sucursal = sucursal;
    }

    public guardarInformacionPersonal(nombre: String, apellido1: String, apellido2: String, fechaNacimiento: String,
        telefono1: String, telefono2: String, sucursal: String) {
        this.setNombre(nombre);
        this.setApellido1(apellido1);
        this.setApellido2(apellido2);
        this.setFechaNacimiento(fechaNacimiento);
        this.setTelefono1(telefono1);
        this.setTelefono2(telefono2);
        this.setSucursal(sucursal);
    }



}
