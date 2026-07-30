import ProductoModelo from "../Modelos/productoModelo.js";


const producto1 = new ProductoModelo(
    1,
    "Adidas Bounce blanco y rojo",
    95000,
    "../../imagenes/productos/BOUNCEBLANCOROJO.webp",
    [37, 38, 39, 40, 41, 42, 43]
);


const producto2 = new ProductoModelo(
    2,
    "Adidas Bounce negro",
    95000,
    "../../imagenes/productos/BOUNCENEGRO.webp",
    [37, 38, 39, 40, 41, 42, 43]
);


const producto3 = new ProductoModelo(
    3,
    "Adidas Bounce gris",
    95000,
    "../../imagenes/productos/BOUNCEGRIS.webp",
    [37, 38, 39, 40, 41, 42, 43]
);


const producto4 = new ProductoModelo(
    4,
    "Adidas Bounce blanco y negro",
    95000,
    "../../imagenes/productos/BOUNCENEGROBLANCO.webp",
    [37, 38, 39, 40, 41, 42, 43]
);



const productos = [
    producto1,
    producto2,
    producto3,
    producto4
];




const imagenPrincipal = document.querySelector("#imagen__principal");

const miniaturas = document.querySelectorAll(".contenedor__producto-disponible");

const nombreProducto = document.querySelector(".catalogo__titulo");



miniaturas.forEach(miniatura => {

    miniatura.addEventListener("click", () => {

        const idProducto = Number(miniatura.dataset.id);


        const productoSeleccionado = productos.find(
            producto => producto.id === idProducto
        );


        // Cambiar la información de la pagina
        imagenPrincipal.srcset = "";

        imagenPrincipal.src = productoSeleccionado.imagen;

        nombreProducto.textContent = productoSeleccionado.nombre;

    });

});