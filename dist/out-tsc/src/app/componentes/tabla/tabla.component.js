import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let TablaComponent = class TablaComponent {
    constructor(servico) {
        this.servico = servico;
        this.enviarPelicula = new EventEmitter();
    }
    ngOnInit() {
    }
    seleccionarPelicula(pelicula) {
        console.info(pelicula);
        this.enviarPelicula.emit(pelicula);
    }
};
__decorate([
    Input()
], TablaComponent.prototype, "listado", void 0);
__decorate([
    Output()
], TablaComponent.prototype, "enviarPelicula", void 0);
TablaComponent = __decorate([
    Component({
        selector: 'app-tabla',
        templateUrl: './tabla.component.html',
        styleUrls: ['./tabla.component.css']
    })
], TablaComponent);
export { TablaComponent };
//# sourceMappingURL=tabla.component.js.map