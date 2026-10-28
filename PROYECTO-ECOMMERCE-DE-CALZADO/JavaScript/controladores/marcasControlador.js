
import catalogos from "../Modelos/catalogoDatos.js";

const contenedorMarcas = document.querySelector("#contenedorMarcas");

const marcas = [
    {
        id: "adidas",
        nombre: "Adidas",
        imagen: "imagenes/marcas/adidas-desktop.webp",
        movil: "imagenes/marcas/adidas-movil.webp",
        tablet: "imagenes/marcas/adidas-tablet.webp"
    },
    {
        id: "under",
        nombre: "Under Armour",
        imagen: "imagenes/marcas/under-desktop.webp",
        movil: "imagenes/marcas/under-movil.webp",
        tablet: "imagenes/marcas/under-tablet.webp"
    },
    {
        id: "jordan",
        nombre: "Jordan",
        imagen: "imagenes/marcas/jordan-desktop.webp",
        movil: "imagenes/marcas/jordan-movil.webp",
        tablet: "imagenes/marcas/jordan-tablet.webp"
    },
    {
        id: "armani",
        nombre: "Armani",
        imagen: "imagenes/marcas/armani-desktop.webp",
        movil: "imagenes/marcas/armani-movil.webp",
        tablet: "imagenes/marcas/armani-tablet.webp"
    }
];

contenedorMarcas.innerHTML = marcas.map(marca => `
    <article class="marca">
        <a href="../../Paginas/catalogos/catalogo.html?marca=${marca.id}">
            <div class="marca__contenedor-imagen">
                <img
                    src="${marca.imagen}"
                    srcset="
                        ${marca.movil} 300w,
                        ${marca.tablet} 500w,
                        ${marca.imagen} 800w
                    "
                    sizes="
                        (max-width: 480px) 300px,
                        (max-width: 768px) 500px,
                        800px
                    "
                    alt="Marca ${marca.nombre}"
                    class="producto__imagen"
                    loading="lazy"
                >
            </div>

            <div class="marca__contenido">
                <h3 class="contenido__titulo">
                    Ver Colección
                    <i class="fa-solid fa-arrow-right"></i>
                </h3>
            </div>
        </a>
    </article>
`).join("");
