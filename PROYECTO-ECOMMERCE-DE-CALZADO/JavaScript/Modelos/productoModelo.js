export default class ProductoModelo {
    constructor( id, nombre, precio, imagen, tallas) {
        this.id = id
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.tallas = tallas;
    }



    getNombre(){
        return this.nombre
    }

    getPrecio(){
        return this.precio
    }

    getImagen(){
        return this.imagen
    }

    getTallas(){
        return this.tallas
    }

    setnombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    setPrecio(nuevoPrecio){
        this.precio = nuevoPrecio
    }

    setImagen(nuevoImagen){
        this.imagen = nuevoImagen
    }

    setTallas(nuevoTalla){
        this.tallas = nuevoTalla
    }

}