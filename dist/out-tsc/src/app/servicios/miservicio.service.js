import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase';
let MiservicioService = class MiservicioService {
    constructor(http) {
        this.http = http;
        this.Peliculas = [];
        this.paises = environment.urlPaises;
        this.init();
    }
    init() {
        var firebaseConfig = {
            apiKey: "AIzaSyBXjPBn8NaY8fhyISxdKYHFbkv7et3gmmw",
            authDomain: "practica-primer-parcial.firebaseapp.com",
            databaseURL: "https://practica-primer-parcial.firebaseio.com",
            projectId: "practica-primer-parcial",
            storageBucket: "practica-primer-parcial.appspot.com",
            messagingSenderId: "810355800667",
            appId: "1:810355800667:web:85775382c3a3bf3b16dd7e",
            measurementId: "G-C7NKYFNEY0"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        this.database = firebase.database();
    }
    // Metodo para realizar un alta en base de datos Firebase
    crear(Pelicula) {
        this.database.ref('Peliculas').push(Pelicula)
            .then(() => console.log("Alta realizada"))
            .catch((e) => console.log("Ocurrio un error" + e));
    }
    // Metodo para realizar una actualizacion en base de datos Firebase
    update(Pelicula) {
        this.database.ref('Peliculas/' + Pelicula.id).update(Pelicula).then(() => {
            console.info("Actualizacion exitosa");
        }).catch((e) => console.info("No se pudo actualizar: " + e));
    }
    // Se traen todos los datos de la base de datos Firebase
    read() {
        this.Peliculas = [];
        console.info("Fetch de todos los jugadores");
        this.database.ref('Peliculas').on('value', (snapshot) => {
            this.Peliculas = [];
            snapshot.forEach((child) => {
                var data = child.val();
                // this.Peliculas.push(Pelicula.CrearPelicula(child.key, data.nombre, data.email,
                //                                         data.clave, data.pais, data.jugados,
                //                                         data.ganados, data.perdidos, data.empatados));
                // this.Peliculas.push(Pelicula.CrearPelicula());
            });
            localStorage.setItem('Peliculas', JSON.stringify(this.Peliculas));
        });
        console.log(this.Peliculas);
        return this.Peliculas;
    }
    // Se busca un Pelicula por ID en la base de datos de Firebase
    search(id) {
        let Pelicula;
        this.database.ref('Peliculas/' + id).once('value').then((snapshot) => {
            console.log("ID: " + snapshot.key);
            let data = snapshot.child.val();
            Pelicula = new Pelicula();
            localStorage.setItem('PeliculaSeleccionado', JSON.stringify(Pelicula));
        }).catch((e) => console.info('Error. No se realizo el fetch: ' + e));
        return Pelicula;
    }
    // Realiza una baja fisica en la base de datos Firebase
    delete(Pelicula) {
        this.database.ref('Peliculas/' + Pelicula.id).remove().then(() => {
            console.info("Baja exitosa");
        }).catch((e) => {
            console.info("Fallo la baja:" + e);
        });
    }
    // Metodo para realizar un get de cualquier API REST
    get() {
        // return this.http.get(this.urlPeliculas).subscribe(response => {
        //   Object.keys(response).map(key => response[key]).forEach( element => {
        //       this.peliculas.push(Pelicula.CrearPelicula(element.id, element.nombre, element.tipo,
        //                                               element.fechaEstreno, element.cantidadPublico, 
        //                                               element.fotoPelicula));
        //     });          
        //     localStorage.setItem("peliculas",JSON.stringify(this.peliculas));
        //   }, error => console.log("error" + error));
    }
    getPaises() {
        let paises = new Array();
        this.http.get(this.paises).subscribe(resultado => {
            localStorage.setItem("paises", JSON.stringify(resultado));
        }, error => {
            console.log("error");
        });
    }
    getLocal() {
        console.info("GET localstorage");
        this.localPaises = JSON.parse(localStorage.getItem("paises"));
        return this.localPaises;
    }
    removeLocal(pais) {
        this.localPaises = JSON.parse(localStorage.getItem("paises"));
        this.localPaises = this.localPaises.filter(element => element.name != pais.nombre);
        localStorage.setItem('paises', JSON.stringify(this.localPaises));
        console.log("Remove array:" + this.localPaises);
    }
    // Metodo para realizar un post a una API REST
    post(Pelicula) {
        // return this.http.post(this.urlPeliculas, pelicula).subscribe( data => { 
        //   console.log( data );
        //   return data;
        // });
    }
};
MiservicioService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MiservicioService);
export { MiservicioService };
//# sourceMappingURL=miservicio.service.js.map