export default class ClienteModelo{
    constructor(nombre, correo, contraseña){
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
    }

    getNombre(){
        return this.nombre;
    }

    getCorreo(){
        return this.correo;
    }

    getContraseña(){
        return this.contraseña;
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    setCorreo(nuevoCorreo){
        this.correo = nuevoCorreo
    }

    setContraseña(nuevoContraseña){
        this.contraseña = nuevoContraseña
    }

    validarNombre(){
        if(this.nombre.length < 3){
            return false
        }
            return true
    }

}