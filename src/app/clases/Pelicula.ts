export class Pelicula{

    public static CrearPelicula(id: string, nombre: string, tipo: Genero, fechaEstreno : Date, 
        cantidadPublico : number, fotoPelicula : number)
    {
        let pelicula = new Pelicula();
        pelicula.id = id;
        pelicula.nombre = nombre;
        pelicula.tipo = tipo;
        pelicula.fechaEstreno = fechaEstreno;
        pelicula.cantidadPublico = cantidadPublico;
        pelicula.fotoPelicula = fotoPelicula;

        return pelicula;
    }

    public id: string;
    public nombre: string;
    public tipo: Genero;
    public fechaEstreno : Date;
    public cantidadPublico : number;
    public fotoPelicula : number;
}

export enum Genero{
    terror = 'terror',
    comedia = 'comedia',
    amor = 'amor',
    otros = 'otros'
}