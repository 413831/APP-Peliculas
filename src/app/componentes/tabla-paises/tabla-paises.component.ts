import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MiservicioService } from 'src/app/servicios/miservicio.service';
import { Pais } from 'src/app/clases/Pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Input() public paises:Pais[];
  @Output() enviarPais: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
    
  }

  ngOnInit(): void {
  }


  seleccionarPelicula(pais: any)
  {
    console.info(pais);
    this.enviarPais.emit(pais);
  }

}
