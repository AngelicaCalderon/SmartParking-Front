import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PlazasComponent } from './plazas/plazas.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { AppComponent } from '../app.component';
import { RegistroSalidaComponent } from './registro-salida/registro-salida.component';

const routes: Routes = [


  {path: 'plazas', component: PlazasComponent},
  {path: 'parametros', component: ParametrosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registroSalida', component: RegistroSalidaComponent},
  {path: 'app', component: AppComponent},
  {path: '**', redirectTo: 'registro'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
