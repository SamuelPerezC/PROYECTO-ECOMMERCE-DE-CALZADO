import ClienteModelo from "../modelos/modeloCliente.js";
import ApiModelo from "../Servicios/ApiModelo.js";



const formulario = document.querySelector(".formulario-validar");



formulario.addEventListener("submit", function(evento){


    evento.preventDefault();



    const nombre = document.querySelector("#nombre").value;

    const correo = document.querySelector("#correo").value;

    const password = document.querySelector("#password").value;

    const confirmar = document.querySelector("#repeatPassword").value;




    if(password !== confirmar){

        alert("Las contraseñas no coinciden");

        return;

    }




    const nuevoCliente = new ClienteModelo(

        nombre,

        correo,

        password

    );





    if(!nuevoCliente.validarNombre()){


        alert("El nombre debe tener mínimo 3 caracteres");

        return;


    }





    const api = new ApiModelo();



    const guardado = api.guardarCliente(nuevoCliente);





    if(guardado){


        alert("Cuenta creada correctamente");


        window.location.href =
        "../Login/login.html";


    }else{


        alert("El correo ya está registrado");


    }



});