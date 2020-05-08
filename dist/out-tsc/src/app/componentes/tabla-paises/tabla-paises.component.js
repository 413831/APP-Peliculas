import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
let TablaPaisesComponent = class TablaPaisesComponent {
    constructor() {
        this.enviarPais = new EventEmitter();
    }
    ngOnInit() {
    }
    seleccionarPelicula(pais) {
        console.info(pais);
        this.enviarPais.emit(pais);
    }
};
__decorate([
    Input()
], TablaPaisesComponent.prototype, "paises", void 0);
__decorate([
    Output()
], TablaPaisesComponent.prototype, "enviarPais", void 0);
TablaPaisesComponent = __decorate([
    Component({
        selector: 'app-tabla-paises',
        templateUrl: './tabla-paises.component.html',
        styleUrls: ['./tabla-paises.component.css']
    })
], TablaPaisesComponent);
export { TablaPaisesComponent };
//# sourceMappingURL=tabla-paises.component.js.map