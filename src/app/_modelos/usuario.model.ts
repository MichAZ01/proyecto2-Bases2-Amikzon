export class Usuario {
    private nombreUsuario:String = "";
    private contrasenia:String = "";
    private tipoID:String = "";
    private identificacion:String = "";
    private tipoUsuario:String = "";

    private nombre:String = "";
    private apellido1:String = "";
    private apellido2:String = "";
    private fechaNacimiento:String = "";
    private telefono1:String = "";
    private telefono2:String = "";

    constructor(nombreUsuario:String, contrasenia:String, tipoID:String, identificacion:String, tipoUsuario:String){
        this.nombreUsuario = nombreUsuario;
        this.contrasenia = contrasenia;
        this.tipoID = tipoID;
        this.identificacion = identificacion;
        this.tipoUsuario = tipoUsuario;
    }

    getNombreCompleto(){
      return this.getNombre() + " " + this.getApellido1() + " " + this.getApellido2();
    }

    public getNombreUsuario(){
        return this.nombreUsuario;
      }
    
      public setNombreUsuario(nombreUsuario:String){
        this.nombreUsuario = nombreUsuario;
      }
    
      public getContrasenia(){
        return this.contrasenia;
      }
    
      public setContrasenia(contrasenia:String){
        this.contrasenia = contrasenia;
      }
    
      public getTipoID(){
        return this.tipoID;
      }
    
      public setTipoID(tipoID:String){
        this.tipoID = tipoID;
      }
    
      public getID(){
        return this.identificacion;
      }
    
      public setID(identificacion:String){
        this.identificacion = identificacion;
      }
    
      public getTipoUsuario(){
        return this.tipoUsuario;
      }
    
      public setTipoUsuario(tipoUsuario:String){
        this.tipoUsuario = tipoUsuario;
      }

      public getNombre(){
        return this.nombre;
      }
    
      public setNombre(nombre:String){
        this.nombre = nombre;
      }

      public getApellido1(){
        return this.apellido1;
      }
    
      public setApellido1(apellido1:String){
        this.apellido1 = apellido1;
      }

      public getApellido2(){
        return this.apellido2;
      }
    
      public setApellido2(apellido2:String){
        this.apellido2 = apellido2;
      }

      public getFechaNacimiento(){
        return this.fechaNacimiento;
      }
    
      public setFechaNacimiento(fechaNacimiento:String){
        this.fechaNacimiento = fechaNacimiento;
      }

      public getTelefono1(){
        return this.telefono1;
      }
    
      public setTelefono1(telefono1:String){
        this.telefono1 = telefono1;
      }

      public getTelefono2(){
        return this.telefono2;
      }
    
      public setTelefono2(telefono2:String){
        this.telefono2 = telefono2;
      }

      modificarInformacion(nombreUsuario:String, contrasenia:String, tipoID:String, identificacion:String, tipoUsuario:String){
        this.setNombreUsuario(nombreUsuario);
        this.setContrasenia(contrasenia);
        this.setTipoID(tipoID);
        this.setID(identificacion);
        this.setTipoUsuario(tipoUsuario);
      }
      
}
