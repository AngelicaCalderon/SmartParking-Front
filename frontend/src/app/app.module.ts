import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './page/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { ParametrosComponent } from './page/parametros/parametros.component';
import { PlazasComponent } from './page/plazas/plazas.component';
import { RegistroComponent } from './page/registro/registro.component';
import { RegistroSalidaComponent } from './page/registro-salida/registro-salida.component';

import { ParametrosService } from './page/parametros/service/parametros.service';
import { PlazasService } from './page/plazas/service/plazas.service';
import { RegistroService } from './page/registro/service/registro.service';
import { RegistroSalidaService } from './page/registro-salida/service/registro-salida.service';


@NgModule({
  declarations: [
    RegistroComponent,
    PlazasComponent,
    ParametrosComponent,
    RegistroSalidaComponent,
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    RegistroService,
    PlazasService,
    ParametrosService,
    RegistroSalidaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
