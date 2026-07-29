import ApiModelo from "../Servicios/ApiModelo.js";

const api = new ApiModelo();

const usuarioActivo = api.obtenerUsuarioActivo();

const nabvarAuth = document.querySelector(".navbar__auth");

function actualizarInterfazUsuario(usuario){

    if(usuario && usuario.nombre){
        navbarAuth.innerHTML = "";

        const mensajeBienvenido = document.createElement("span");
        mensajeBienvenido.className = "navbar__bienvenido";
        mensajeBienvenido.innerHTML = `
        <i class="fa-solid fa-user-circle"></i>
        Bienvenido, ${usuario.nombre}`;

        const botonCerrarSesion = document.createElement("a");
        botonCerrarSesion.className = "navbar__cerrar-sesion";
        botonCerrarSesion.href = "#";
        botonCerrarSesion.innerHTML = `
            <i class="fa-solid fa-sign-out-alt"></i>
            Cerrar Sesion`;
        

        botonCerrarSesion.addEventListener("click", function(evento){
            evento.preventDefault();
            // eliminar usuario activo
            localStorage.removeItem("usuarioActivo");
            window.location.reload();
        })


        navbarAuth.appendChild(mensajeBienvenido);
        navbarAuth.appendChild(botonCerrarSesion);

    }else{
        if(!navbarAuth.querySelector(".navbar__registro")){
            navbarAuth.innerHTML = `
                <a href="./Paginas/signUp/signUp.html" class="navbar__registro">
                    Crear Cuenta
                </a>


                <a href="./Paginas/login/login.html" class="navbar__login">
                    Iniciar Sesion
                </a>

                <i class="fa-solid fa-user"></i>`
            ;
        }
    }
}

actualizarInterfazUsuario(usuarioActivo)


