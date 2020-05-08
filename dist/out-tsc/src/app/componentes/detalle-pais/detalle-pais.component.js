import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let DetallePaisComponent = class DetallePaisComponent {
    constructor() {
        this.deshabilitarPais = new EventEmitter();
    }
    ngOnInit() {
    }
    deshabilitar() {
        this.deshabilitarPais.emit(this.pais);
    }
};
__decorate([
    Input()
], DetallePaisComponent.prototype, "pais", void 0);
__decorate([
    Output()
], DetallePaisComponent.prototype, "deshabilitarPais", void 0);
DetallePaisComponent = __decorate([
    Component({
        selector: 'app-detalle-pais',
        templateUrl: './detalle-pais.component.html',
        styleUrls: ['./detalle-pais.component.css']
    })
], DetallePaisComponent);
export { DetallePaisComponent };
//# sourceMappingURL=detalle-pais.component.js.map