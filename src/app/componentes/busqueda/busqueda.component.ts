import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MiservicioService } from 'src/app/servicios/miservicio.service';
import { Pelicula } from 'src/app/clases/Pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  @Output() enviarPelicula: EventEmitter<any> = new EventEmitter<any>();
  nombrePelicula: string = '';
  peliculasBuscadas: Pelicula[];
  
  constructor(private servicio: MiservicioService) { 
    
  }

  ngOnInit(): void {
    
  }

  public Buscar()
  {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));
    this.peliculasBuscadas = peliculas.filter( pelicula => pelicula.nombre == this.nombrePelicula);
    this.enviarPelicula.emit(this.peliculasBuscadas);
  }

}
