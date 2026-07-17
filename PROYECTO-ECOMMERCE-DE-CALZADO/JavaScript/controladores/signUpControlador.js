import ClienteModelo from "../modelos/modeloCliente.js";
import ApiModelo from "../Servicios/ApiModelo.js";

// hace dom del formulario registrar


const formulario = document.querySelector(".formulario-validar");

// crea el evento
formulario.addEventListener("submit", function(evento){


    evento.preventDefault();



    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const password = document.querySelector("#password").value;
    const confirmar = document.querySelector("#repeatPassword").value;


// rectifica de que las contraseñas sean igual 
    if(password !== confirmar){
        alert("Las Contraseñas Deben Coincidir");
        return;

    }


    const nuevoCliente = new ClienteModelo(nombre, correo, password);


// validacion de que el usuario tenga al menos 3 caracteres
    if(!nuevoCliente.validarNombre()){
        alert("El nombre debe tener mínimo 3 caracteres");
        return;
    }



    const api = new ApiModelo();


    const guardado = api.guardarCliente(nuevoCliente);

// alerta si crea una nueva cuenta o si el correo ya esta registrado 

    if(guardado){

        alert("Cuenta creada correctamente");

        window.location.href = "../login/login.html";

    }else{

        alert("El correo ya está registrado");
    }

});