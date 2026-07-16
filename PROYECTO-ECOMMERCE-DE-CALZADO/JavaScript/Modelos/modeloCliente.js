export default class ClienteModelo{
    constructor(nombre, correo, contraseña){
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
    }

    validarNombre(){
        if(this.nombre.length < 3){
            return false
        }
            return true
    }



}