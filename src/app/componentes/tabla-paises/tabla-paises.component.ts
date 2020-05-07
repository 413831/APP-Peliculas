import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MiservicioService } from 'src/app/servicios/miservicio.service';
import { Pais } from 'src/app/clases/Pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  public paises:Pais[];
  @Output() enviarPais: EventEmitter<any> = new EventEmitter<any>();

  constructor(private servicio: MiservicioService) { 
    this.paises = [];
    this.servicio.getPaises();
    JSON.parse(localStorage.getItem("paises")).forEach( element => {
      this.paises.push(new Pais(element.name, element.flag, element.capital, 
                              element.languages, element.subregion ));
    });
  }

  ngOnInit(): void {
  }


  seleccionarPelicula(pais: any)
  {
    console.info(pais);
    this.enviarPais.emit(pais);
  }

}
