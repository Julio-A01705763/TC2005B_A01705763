const db = require('../util/database');
/*
const juegos = [
    { 
        juego: "Zelda Breath of the Wild", 
        imagen: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg", 
        descripcion: "Explora y descubre un mundo lleno de aventuras en The Legend of Zelda: Breath of the Wild, una nueva saga que rompe los esquemas de la aclamada serie.",
        precio: "60 dolares / 1,200 pesos mexicanos"
    }, 
    {
        juego: "Pokemon Scarlet",
        imagen: "https://sm.ign.com/ign_latam/cover/p/pokemon-sc/pokemon-scarlet_cd8u.jpg", 
        descripcion: "Explora Paldea en la busqueda de encontrar que son los pokemones tan raros que estan por esta nueva región. ",
        precio: "60 dolares / 1,200 pesos mexicanos"
    }, 
    { 
        juego: "Pokemon Violet",
        imagen: "https://www.latercera.com/resizer/JiTuUlBOY2lIe31moj1lzBZYQaA=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/JSI7T5BENZBTBOARJPYJFHCMIE.jpg", 
        descripcion: "Explora Paldea en la busqueda de encontrar que son los pokemones tan raros que estan por esta nueva región. ",
        precio: "60 dolares / 1,200 pesos mexicanos"
    },
    { 
        juego: "Luigi's Mansion",
        imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_LuigisMansion3_image1280w.jpg", 
        descripcion: "Luigi ha sido invitado al hotel El Gran Descanso Real, ¡pero cuando Mario y sus amigos desaparecen, Luigi tendrá que superar sus miedos para salvarlos.",
        precio: "60 dolares / 1,200 pesos mexicanos"
    },
    { 
        juego: "Mario Odyssey",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_951095-MLA29062841364_122018-O.jpg", 
        descripcion: "Acompaña a Mario en una aventura enorme en 3D y rescata a la princesa Peach de su boda con Bowser.",
        precio: "60 dolares / 1,200 pesos mexicanos"
    } 
];
*/
module.exports = class Juego {

    constructor(nuevo_juego) {
        this.juego = nuevo_juego.juego || 'JUEGO';
        this.imagen = nuevo_juego.imagen || 'https://bulma.io/images/placeholders/1280x960.png';
        this.descripcion = nuevo_juego.descripcion || '';
        this.precio = nuevo_juego.precio || '';
    }

    save() {
        return db.execute(`
          INSERT INTO juegos (juego, imagen, descripcion, precio) 
            values (?, ?, ?, ?)
        `, [this.juego, this.imagen, this.descripcion, this.precio]);
    }
    
    static fetchAll() {
        return db.execute(
          `SELECT j.juego, j.imagen, j.descripcion, j.precio 
            FROM juegos j
           `
        );
    }

    static fetchOne(id) {
        return db.execute(
            `SELECT j.id_juego, j.juego, j.imagen, j.descripcion, j.precio
            FROM juegos j
            `, [id]
        );
    }

    static fetch(id) {
        if (id) {
            return Juego.fetchOne(id);
        } else {
            return Juego.fetchAll();
        }
    }
}
