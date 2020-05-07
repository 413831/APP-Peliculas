import { Component, OnInit } from '@angular/core';
import { MiservicioService } from 'src/app/servicios/miservicio.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  public paises = new Array<any>();

  constructor(private servicio: MiservicioService) { 
    this.servicio.getPaises();
    this.paises = JSON.parse(localStorage.getItem("paises"));
  }

  ngOnInit(): void {
  }

}
