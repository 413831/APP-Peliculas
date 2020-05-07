import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { HomeComponent } from './componentes/home/home.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { ActorComponent } from './componentes/actor/actor.component';
import { MiservicioService } from './servicios/miservicio.service';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    HomeComponent,
    PeliculasComponent,
    ActorComponent,
    TablaComponent,
    DetallePeliculaComponent,
    PaisesListadoComponent,
    PrincipalComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MiservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
