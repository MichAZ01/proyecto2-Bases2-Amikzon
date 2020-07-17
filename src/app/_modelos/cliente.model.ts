import { Usuario } from './usuario.model';

export class Cliente extends Usuario {
    public provincia: String = "";

    constructor(nombreUsuario: String, contrasenia: String, tipoID: String, identificacion: String, tipoUsuario: String) {
        super(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
    }

    getProvincia() {
        return this.provincia;
    }

    public guardarInformacionPersonal(nombre: String, apellido1: String, apellido2: String, fechaNacimiento: String,
        telefono1: String, telefono2: String) {
        this.setNombre(nombre);
        this.setApellido1(apellido1);
        this.setApellido2(apellido2);
        this.setFechaNacimiento(fechaNacimiento);
        this.setTelefono1(telefono1);
        this.setTelefono2(telefono2);
    }
    
}
