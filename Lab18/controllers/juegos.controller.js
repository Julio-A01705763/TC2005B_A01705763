const Juego = require('../models/models.juego');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const juego = new Juego({
        juego: request.body.juego,
        descripcion: request.body.descripcion,
        precio: request.body.precio,
    });

    juego.save()
     .then(([rows, fieldData]) => {

        request.session.mensaje = "El juego fue registrado exitosamente.";

        request.session.ultimo_juego = juego.juego;

        response.redirect('/juegos/');
    })
    .catch((error) => {console.log(error)});
};


exports.listar = (request, response, next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';
    
    let consultas = cookies.split(';')[0].split('=')[1] || 0;
    
    consultas++;
    
    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    let mensaje = '';

    if (request.session.mensaje) {
        mensaje = request.session.mensaje;
        request.session.mensaje = '';
    }

    Juego.fetch(request.params.id)
    .then(([rows, fieldData])=> {
        console.log(rows);

        response.render('lista', {
            juegos:rows,
            ultimo_juego: request.session.ultimo_juego || '',
            mensaje: mensaje,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })
    .catch(err => {
        console.log(err);
    })
};