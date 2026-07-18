import ApiModelo from "../Servicios/ApiModelo.js";

const api = new ApiModelo();

const usuario = api.obtenerUsuarioActivo();

const nombre = document.querySelector("#nombreUsuario")

