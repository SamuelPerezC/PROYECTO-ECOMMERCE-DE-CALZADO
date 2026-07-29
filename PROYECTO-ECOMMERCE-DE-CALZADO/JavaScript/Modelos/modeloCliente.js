export default class ClienteModelo{
    constructor(nombre, correo, contraseña){
        this.nombre = nombre;
        this.correo = correo;
        this.password = contraseña;
    }

    getNombre(){
        return this.nombre;
    }

    getCorreo(){
        return this.correo;
    }

    getContraseña(){
        return this.password;
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    setCorreo(nuevoCorreo){
        this.correo = nuevoCorreo
    }

    setContraseña(nuevoPassword){
        this.password = nuevoPassword
    }

    validarNombre(){
        if(this.nombre.length < 3){
            return false
        }
            return true
    }

}