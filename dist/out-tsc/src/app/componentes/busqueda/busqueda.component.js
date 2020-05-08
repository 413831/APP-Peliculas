import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let BusquedaComponent = class BusquedaComponent {
    constructor(servicio) {
        this.servicio = servicio;
        this.enviarPelicula = new EventEmitter();
        this.nombrePelicula = '';
    }
    ngOnInit() {
    }
    Buscar() {
        let peliculas = JSON.parse(localStorage.getItem("peliculas"));
        this.peliculasBuscadas = peliculas.filter(pelicula => pelicula.nombre == this.nombrePelicula);
        this.enviarPelicula.emit(this.peliculasBuscadas);
    }
};
__decorate([
    Output()
], BusquedaComponent.prototype, "enviarPelicula", void 0);
BusquedaComponent = __decorate([
    Component({
        selector: 'app-busqueda',
        templateUrl: './busqueda.component.html',
        styleUrls: ['./busqueda.component.css']
    })
], BusquedaComponent);
export { BusquedaComponent };
//# sourceMappingURL=busqueda.component.js.map