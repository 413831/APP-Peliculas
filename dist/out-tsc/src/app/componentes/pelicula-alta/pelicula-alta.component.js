import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Pelicula } from 'src/app/clases/Pelicula';
let PeliculaAltaComponent = class PeliculaAltaComponent {
    constructor(http) {
        this.http = http;
        this.pelicula = new Pelicula();
    }
    ngOnInit() {
    }
    altaPelicula() {
        console.log(this.pelicula);
        this.http.crear(this.pelicula);
    }
};
PeliculaAltaComponent = __decorate([
    Component({
        selector: 'app-pelicula-alta',
        templateUrl: './pelicula-alta.component.html',
        styleUrls: ['./pelicula-alta.component.css']
    })
], PeliculaAltaComponent);
export { PeliculaAltaComponent };
//# sourceMappingURL=pelicula-alta.component.js.map