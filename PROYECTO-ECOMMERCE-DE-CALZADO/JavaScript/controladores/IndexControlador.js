import ApiModelo from "../Servicios/ApiModelo.js";

const api = new ApiModelo();

const usuario = api.obtenerUsuarioActivo();

const nombre = document.querySelector("#nombreUsuario")

if(usuario){
    nombre.textContent = `Bienvenido ${usuario.nombre}`
}else{
    window.location.href = "../../Paginas/login/login.html"
}