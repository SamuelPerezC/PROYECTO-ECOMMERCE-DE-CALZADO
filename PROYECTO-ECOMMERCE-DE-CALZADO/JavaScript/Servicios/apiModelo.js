export default class ApiModelo{

    guardarCliente(cliente){
        let clientes = JSON.parse(localStorage.getItem("clientes"));
    

    // sino existen clientes crea un arreglo vaxio
    if(clientes == null){
            clientes = [];
        }

    // comprobar si el usuario ya existe
    const existe = clientes.some(usuario =>
            usuario.correo === cliente.correo
        );


        if(existe){
            return false;
        }

        clientes.push(cliente);

        // convierte el arreglo en json
        localStorage.setItem(
            "clientes",
            JSON.stringify(clientes)
        );
        return true;

    }


    buscarCliente(correo,password){

    // obtner los clientes guardados

        const clientes = JSON.parse(
            localStorage.getItem("clientes")
        );

        // si no hay usuarios devuelve vacio
        if(clientes == null){
            return null;
        }

        const usuarioEncontrado = clientes.find(usuario =>

            usuario.correo === correo &&
            usuario.password === password

        );

        // devuleve el usuario o nul
        return usuarioEncontrado || null;

    }



    // se guarda en el locasrotarge
    guardarUsuarioActivo(usuario){

        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuario)

        );

    }

}
