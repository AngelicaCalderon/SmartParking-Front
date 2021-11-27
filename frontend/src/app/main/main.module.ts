import { ParametrosService } from './parametros/service/parametros.service';
import { PlazasService } from './plazas/service/plazas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroService } from './registro/service/registro.service';
import { RegistroSalidaService } from './registro-salida/service/registro-salida.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { PlazasComponent } from './plazas/plazas.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { RegistroSalidaComponent } from './registro-salida/registro-salida.component';


@NgModule({
  declarations: [
    RegistroComponent,
    PlazasComponent,
    ParametrosComponent,
    RegistroSalidaComponent
  ],
  providers:[
    RegistroService,
    PlazasService,
    ParametrosService,
    RegistroSalidaService
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MainModule { }
