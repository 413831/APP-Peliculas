import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/Pelicula';
import { MiservicioService } from 'src/app/servicios/miservicio.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() listado: Pelicula[];
  @Output() enviarPelicula: EventEmitter<any> = new EventEmitter<any>();
  private pelicula: Pelicula;

  constructor(private servico: MiservicioService) { }

  ngOnInit(): void {
  }

  seleccionarPelicula(pelicula: Pelicula)
  {
    console.info(pelicula);
    this.enviarPelicula.emit(pelicula);
  }
}
