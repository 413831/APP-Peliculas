import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/Pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() pais: Pais;
  @Output() deshabilitarPais: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deshabilitar(){
    this.deshabilitarPais.emit(this.pais);

  }

}
