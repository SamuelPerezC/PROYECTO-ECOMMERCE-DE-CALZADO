import ApiModelo from "../Servicios/ApiModelo.js";

const formulario = document.querySelector(".formulario-login");

formulario.addEventListener("submit", function(evento){

    evento.preventDefault();

    const correo = document.querySelector("#correo").value;
    const password = document.querySelector("#password").value;

    const api = new ApiModelo()

    const usuario = api.buscarCliente(correo, password)

    if(usuario){

        api.guardarUsuarioActivoUsuarioActivo(usuario)

        alert(
            `Bienvenido ${usuario.nombre}`
        )
        window.location.href = "../../index.html";
    }else{
        alert("Correo o Contraseña Incorrecta")
    }
})