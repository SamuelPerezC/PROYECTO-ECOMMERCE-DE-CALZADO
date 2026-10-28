
const catalogos = {
    adidas: {
        nombre: "Adidas",
        productos: [
            {
                id: 1,
                nombre: "Adidas Bounce blanco y rojo",
                precio: 95000,
                imagen: "../../imagenes/productos/BOUNCEBLANCOROJO.webp",
                miniaturas: [
                    "../../imagenes/productos/BOUNCEBLANCOROJO.webp",
                    "../../imagenes/productos/BOUNCENEGRO.webp",
                    "../../imagenes/productos/BOUNCEGRIS.webp",
                    "../../imagenes/productos/BOUNCENEGROBLANCO.webp"
                ],
                tallas: [37, 38, 39, 40, 41, 42, 43]
            },
            {
                id: 2,
                nombre: "Adidas Bounce negro",
                precio: 95000,
                imagen: "../../imagenes/productos/BOUNCENEGRO.webp",
                miniaturas: [
                    "../../imagenes/productos/BOUNCENEGRO.webp",
                    "../../imagenes/productos/BOUNCEBLANCOROJO.webp",
                    "../../imagenes/productos/BOUNCEGRIS.webp",
                    "../../imagenes/productos/BOUNCENEGROBLANCO.webp"
                ],
                tallas: [38, 39, 40, 41, 42]
            }
        ]
    },

    under: {
        nombre: "Under Armour",
        productos: [
            {
                id: 1,
                nombre: "Under Armour Sport",
                precio: 120000,
                imagen: "../../imagenes/productos/under-sport.webp",
                miniaturas: [
                    "../../imagenes/productos/under-sport.webp"
                ],
                tallas: [39, 40, 41, 42, 43]
            }
        ]
    },

    jordan: {
        nombre: "Jordan",
        productos: [
            {
                id: 1,
                nombre: "Jordan Retro",
                precio: 180000,
                imagen: "../../imagenes/productos/jordan-retro.webp",
                miniaturas: [
                    "../../imagenes/productos/jordan-retro.webp"
                ],
                tallas: [38, 39, 40, 41, 42]
            }
        ]
    },

    armani: {
        nombre: "Armani",
        productos: [
            {
                id: 1,
                nombre: "Armani Sport",
                precio: 150000,
                imagen: "../../imagenes/productos/armani-sport.webp",
                miniaturas: [
                    "../../imagenes/productos/armani-sport.webp"
                ],
                tallas: [39, 40, 41, 42]
            }
        ]
    }
};

export default catalogos;
