import { Vendedor } from './vendedor.model';

export class Corporativo extends Vendedor{

    constructor(nombreUsuario:String, contrasenia:String, tipoID:String, identificacion:String, tipoUsuario:String){
        super(nombreUsuario, contrasenia, tipoID, identificacion, tipoUsuario);
    }
}
