import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/Pais';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {
  public pais : Pais;
  constructor() { }

  ngOnInit(): void {
  }

  seleccionarPais(pais: Pais)
  {
    console.log(pais);
    this.pais = pais;
  }

}
