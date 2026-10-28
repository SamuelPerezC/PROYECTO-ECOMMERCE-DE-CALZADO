
import catalogos from "../Modelos/catalogoDatos.js";

// 1. Identificar la marca seleccionada en la URL
const parametros = new URLSearchParams(window.location.search);
const marcaSeleccionada = parametros.get("marca");

// 2. Obtener los datos de esa marca
const catalogo = catalogos[marcaSeleccionada];

// 3. Seleccionar los elementos del HTML
const imagenPrincipal = document.querySelector("#imagen__principal");
const miniaturas = document.querySelector("#miniaturas");
const nombreProducto = document.querySelector(".catalogo__titulo");
const precioProducto = document.querySelector(".catalogo__precio");
const contenedorTallas = document.querySelector("#tallas");
const botonCarrito = document.querySelector(".boton__comprar");

// 4. Validar que la marca exista
if (!catalogo || catalogo.productos.length === 0) {
    document.querySelector("main").textContent =
        "No se encontró el catálogo solicitado.";
} else {
    // Mostrar el primer producto
    mostrarProducto(catalogo.productos[0]);

    // Generar las miniaturas con map()
    miniaturas.innerHTML = catalogo.productos.map(producto => `
        <button
            class="contenedor__producto-disponible"
            type="button"
            data-id="${producto.id}"
            aria-label="${producto.nombre}"
        >
            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                class="producto__imagen catalogo__imagen"
                loading="lazy"
            >
        </button>
    `).join("");

    // Escuchar los clics en las miniaturas
    miniaturas.addEventListener("click", evento => {
        const boton = evento.target.closest("button[data-id]");

        if (!boton) return;

        const productoSeleccionado = catalogo.productos.find(
            producto => producto.id === Number(boton.dataset.id)
        );

        if (productoSeleccionado) {
            mostrarProducto(productoSeleccionado);
        }
    });
}

// 5. Actualizar la información del producto
function mostrarProducto(producto) {
    imagenPrincipal.src = producto.imagen;
    imagenPrincipal.alt = producto.nombre;
    imagenPrincipal.srcset = "";

    nombreProducto.textContent = producto.nombre;

    precioProducto.textContent = producto.precio.toLocaleString(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }
    );

    // Generar las tallas disponibles
    contenedorTallas.innerHTML = producto.tallas.map(talla => `
        <div class="talla">
            <button type="button" data-talla="${talla}">
                ${talla}
            </button>
        </div>
    `).join("");

    // Actualizar los datos que utiliza el carrito
    botonCarrito.dataset.nombre = producto.nombre;
    botonCarrito.dataset.precio = producto.precio;
    botonCarrito.dataset.id = producto.id;
    botonCarrito.dataset.marca = marcaSeleccionada;
}
