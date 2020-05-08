import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Pais } from 'src/app/clases/Pais';
let PaisesListadoComponent = class PaisesListadoComponent {
    constructor(servicio, route, router) {
        this.servicio = servicio;
        this.route = route;
        this.router = router;
        this.paises = [];
        this.servicio.getPaises();
        this.servicio.getLocal().forEach(element => {
            this.paises.push(new Pais(element.name, element.flag, element.capital, element.languages, element.subregion));
        });
    }
    ngOnInit() {
    }
    seleccionarPais(pais) {
        console.log(pais);
        this.pais = pais;
    }
    bajaPais(pais) {
        this.servicio.removeLocal(pais);
    }
};
PaisesListadoComponent = __decorate([
    Component({
        selector: 'app-paises-listado',
        templateUrl: './paises-listado.component.html',
        styleUrls: ['./paises-listado.component.css']
    })
], PaisesListadoComponent);
export { PaisesListadoComponent };
//# sourceMappingURL=paises-listado.component.js.map