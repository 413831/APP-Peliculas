import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/Actor';
import { Pais } from 'src/app/clases/Pais';
import { MiservicioService } from 'src/app/servicios/miservicio.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  public actor: Actor = new Actor();
  public pais : Pais;
  public paises: Pais[] = [];

  constructor(private servicio: MiservicioService) {
    this.servicio.getLocal().forEach( element => {
      this.paises.push(new Pais(element.name, element.flag, element.capital, 
                              element.languages, element.subregion ));
    });
   }

  ngOnInit(): void {
  }

  seleccionarPais(pais: Pais)
  {
    this.pais = pais;
    this.actor.paisOrigen = pais.nombre;
  }

  alta(){
    this.servicio.crearActor(this.actor);
    console.log(this.actor);
  }

}
