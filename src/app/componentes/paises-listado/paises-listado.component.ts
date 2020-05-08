import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/Pais';
import { IfStmt } from '@angular/compiler';
import { MiservicioService } from 'src/app/servicios/miservicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {
  public pais : Pais;
  public paises: Pais[];

  constructor(private servicio: MiservicioService, private route: Router) {
    this.paises = [];
    this.servicio.getPaises();
    this.servicio.getLocal().forEach( element => {
      this.paises.push(new Pais(element.name, element.flag, element.capital, 
                              element.languages, element.subregion ));
    });
   }

  ngOnInit(): void {
   
  }

  seleccionarPais(pais: Pais)
  {
    console.log(pais);
    this.pais = pais;
  }

  bajaPais(pais: Pais){
    this.servicio.removeLocal(pais);
    this.route.navigate(['/paises/listado']);
  }

}
