import { Usuario } from './usuario.model';
import { SrvRecord } from 'dns';
import { dir } from 'console';

export class Cliente extends Usuario {
    private provincia: String = "";
    private canton: String = "";
    private distrito: String = "";
    private direccionExacta: String = "";
    private latitud: Number;
    private longitud: Number;


    constructor(nombreUsuario: String, contrasenia: String, tipoID: String, identificacion: String, tipoUsuario: String) {
        super(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
    }

    getProvincia() {
        return this.provincia;
    }

    setProvincia(provincia: String){
        this.provincia = provincia;
    }

    getCanton(){
        return this.canton;
    }

    setCanton(canton: String){
        this.canton = canton;
    }

    getDistrito(){
        return this.distrito;
    }

    setDistrito(distrito: String){
        this.distrito = distrito;
    }

    getDireccionExacta(){
        return this.direccionExacta;
    }

    setDireccionExacta(direccion: String){
        this.direccionExacta = direccion;
    }

    getLatitud(){
        return this.latitud;
    }

    setLatitud(latitud: Number){
        this.latitud = latitud;
    }

    getLongitud(){
        return this.longitud;
    }

    setLongitud(longitud: Number){
        this.longitud = longitud;
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

    public guardarDireccion(provincia: String, canton: String, distrito: String, direccion: String, lat: Number, long: Number){
        this.setProvincia(provincia);
        this.setCanton(canton);
        this.setDistrito(distrito);
        this.setDireccionExacta(direccion);
        this.setLatitud(lat);
        this.setLongitud(long);
    }
    
}
