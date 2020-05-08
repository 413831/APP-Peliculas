import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Actor } from 'src/app/clases/Actor';
import { Pais } from 'src/app/clases/Pais';
let ActorAltaComponent = class ActorAltaComponent {
    constructor(servicio) {
        this.servicio = servicio;
        this.actor = new Actor();
        this.paises = [];
        this.servicio.getLocal().forEach(element => {
            this.paises.push(new Pais(element.name, element.flag, element.capital, element.languages, element.subregion));
        });
    }
    ngOnInit() {
    }
    seleccionarPais(pais) {
        this.pais = pais;
        this.actor.paisOrigen = pais.nombre;
    }
};
ActorAltaComponent = __decorate([
    Component({
        selector: 'app-actor-alta',
        templateUrl: './actor-alta.component.html',
        styleUrls: ['./actor-alta.component.css']
    })
], ActorAltaComponent);
export { ActorAltaComponent };
//# sourceMappingURL=actor-alta.component.js.map