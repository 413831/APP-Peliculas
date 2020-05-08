import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/Actor';
import { Pais } from 'src/app/clases/Pais';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  public actor: Actor;
  public pais : Pais;
  public paises: Pais[];

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarPais(pais: Pais)
  {
    this.actor.paisOrigen = pais.nombre;
  }

}
