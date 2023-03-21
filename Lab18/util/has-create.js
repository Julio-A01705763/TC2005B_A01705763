module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('crear_juegos') >= 0)) {
        return response.redirect('/juegos/nuevo');
    }
    next();
}