import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let PeliculaListadoComponent = class PeliculaListadoComponent {
    constructor() {
        this.enviarPelicula = new EventEmitter();
        this.listado = [];
    }
    ngOnInit() {
        this.TraerPeliculas();
    }
    TraerPeliculas() {
        this.listado = JSON.parse(localStorage.getItem('peliculas'));
    }
    TraerPelicula(pelicula) {
        this.peliculaSeleccionada = pelicula;
        pelicula = null;
    }
};
__decorate([
    Output()
], PeliculaListadoComponent.prototype, "enviarPelicula", void 0);
PeliculaListadoComponent = __decorate([
    Component({
        selector: 'app-pelicula-listado',
        templateUrl: './pelicula-listado.component.html',
        styleUrls: ['./pelicula-listado.component.css']
    })
], PeliculaListadoComponent);
export { PeliculaListadoComponent };
//# sourceMappingURL=pelicula-listado.component.js.map