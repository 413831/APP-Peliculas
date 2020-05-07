import { Component, OnInit } from '@angular/core';
import { MiservicioService } from 'src/app/servicios/miservicio.service';
import { Pelicula } from 'src/app/clases/Pelicula';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  public pelicula: Pelicula;

  constructor(private http: MiservicioService) { 
    this.pelicula = new Pelicula();
   
  }


  ngOnInit(): void {
  }

  altaPelicula()
  {
    console.log(this.pelicula);
    this.http.crear(this.pelicula);
  }

}
