import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/Pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Output() enviarPelicula: EventEmitter<any> = new EventEmitter<any>();
  peliculaSeleccionada: Pelicula;
  listado: Pelicula[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.TraerPeliculas();
  }

  public TraerPeliculas()
  {
    this.listado = JSON.parse(localStorage.getItem('peliculas'));  
  }

  public TraerPelicula(pelicula: Pelicula)
  {
    this.peliculaSeleccionada = pelicula;
    pelicula = null;
  }
}
