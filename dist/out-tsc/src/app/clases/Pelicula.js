export class Pelicula {
    static CrearPelicula(id, nombre, tipo, fechaEstreno, cantidadPublico, fotoPelicula) {
        let pelicula = new Pelicula();
        pelicula.id = id;
        pelicula.nombre = nombre;
        pelicula.tipo = tipo;
        pelicula.fechaEstreno = fechaEstreno;
        pelicula.cantidadPublico = cantidadPublico;
        pelicula.fotoPelicula = fotoPelicula;
        return pelicula;
    }
}
export var Genero;
(function (Genero) {
    Genero["terror"] = "terror";
    Genero["comedia"] = "comedia";
    Genero["amor"] = "amor";
    Genero["otros"] = "otros";
})(Genero || (Genero = {}));
//# sourceMappingURL=Pelicula.js.map