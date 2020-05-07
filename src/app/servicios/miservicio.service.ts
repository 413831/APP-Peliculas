import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase';
import { Pelicula } from '../clases/Pelicula';


@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  private Peliculas: Pelicula[] = [];
  private database;
  private paises = environment.urlPaises;

  constructor(private http: HttpClient) {
    this.init();
  }

  private init(){
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
  public crear(Pelicula: Pelicula){
    this.database.ref('Peliculas').push(Pelicula)
                  .then(() => console.log("Alta realizada"))
                  .catch((e) => console.log("Ocurrio un error" + e));
  }

  // Metodo para realizar una actualizacion en base de datos Firebase
  public update(Pelicula: Pelicula)
  {
    this.database.ref('Peliculas/' + Pelicula.id).update(Pelicula).then(() => {
          console.info("Actualizacion exitosa");
        }).catch((e) => console.info("No se pudo actualizar: "+ e));
  }

  // Se traen todos los datos de la base de datos Firebase
  public read() : Pelicula[]
  {
    this.Peliculas = [];
    console.info("Fetch de todos los jugadores");

    this.database.ref('Peliculas').on('value', (snapshot)=>{
      this.Peliculas = [];
        snapshot.forEach((child) =>
        {
          var data = child.val();
          // this.Peliculas.push(Pelicula.CrearPelicula(child.key, data.nombre, data.email,
          //                                         data.clave, data.pais, data.jugados,
          //                                         data.ganados, data.perdidos, data.empatados));
          // this.Peliculas.push(Pelicula.CrearPelicula());
        });        
        localStorage.setItem('Peliculas', JSON.stringify(this.Peliculas));
    })
    console.log(this.Peliculas);
    return this.Peliculas;
  }

  // Se busca un Pelicula por ID en la base de datos de Firebase
  public search(id: String){
    let Pelicula;

    this.database.ref('Peliculas/' + id).once('value').then((snapshot) => 
    {
      console.log("ID: "+ snapshot.key);
      
          let data = snapshot.child.val();
          Pelicula = new Pelicula();
          
        localStorage.setItem('PeliculaSeleccionado', JSON.stringify(Pelicula));
    }).catch((e) => console.info('Error. No se realizo el fetch: ' + e));
    return Pelicula;
  }

  // Realiza una baja fisica en la base de datos Firebase
  public delete(Pelicula: Pelicula)
  {
    this.database.ref('Peliculas/' + Pelicula.id).remove().then(() => {
          console.info("Baja exitosa");
        }).catch((e) => {
          console.info("Fallo la baja:" + e);
        });
  }

  // Metodo para realizar un get de cualquier API REST
  public get()
  {
    // return this.http.get(this.urlPeliculas).subscribe(response => {
    //   Object.keys(response).map(key => response[key]).forEach( element => {
    //       this.peliculas.push(Pelicula.CrearPelicula(element.id, element.nombre, element.tipo,
    //                                               element.fechaEstreno, element.cantidadPublico, 
    //                                               element.fotoPelicula));
    //     });          
    //     localStorage.setItem("peliculas",JSON.stringify(this.peliculas));
    //   }, error => console.log("error" + error));
  }

  public getPaises()
  {
    let paises = new Array<any>();

    return this.http.get(this.paises).subscribe(response => {
      Object.keys(response).map(key => response[key]).forEach( element => {
          paises.push(JSON.parse(element));
        });          
        localStorage.setItem("paises",JSON.stringify(paises));
      }, error => console.log("error" + error));
      
  }

  // Metodo para realizar un post a una API REST
  public post(Pelicula: Pelicula){
    // return this.http.post(this.urlPeliculas, pelicula).subscribe( data => { 
    //   console.log( data );
    //   return data;
    // });
  }

  /////////////////////////////////////METODOS OPCIONALES////////////////////////////////////////////

  // Traer Peliculas del Local Storage
  //
  // public getLocal(): Pelicula[] {
  //   console.info("GET localstorage");
  //   this.Peliculas = JSON.parse(localStorage.getItem("Peliculas"));
  //   return this.Peliculas; 
  // }

  // Traer un Pelicula del Local Storage
  //
  // public searchLocal() {
  //   let Pelicula: Pelicula = new Pelicula();
  //   let data;
  //   data = JSON.parse(localStorage.getItem("PeliculaSeleccionado"));

  //   Pelicula = Pelicula.CrearPelicula();
  //   return Pelicula;
  // }

  // Actualizar un Pelicula del Local Storage
  // public updateLocal(Pelicula: Pelicula) {    
  //   this.update(Pelicula);
  //   localStorage.setItem("PeliculaSeleccionado", JSON.stringify(Pelicula));
  // }




}