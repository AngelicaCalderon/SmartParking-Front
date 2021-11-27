import { Component, OnInit } from '@angular/core';
import { RegistroSalidaService } from './service/registro-salida.service';
import { RegistroSalidaTO } from '../interfaces/registroSalidato.interface';

@Component({
  selector: 'app-registro-salida',
  templateUrl: './registro-salida.component.html',
  styleUrls: ['./registro-salida.component.css']
})
export class RegistroSalidaComponent implements OnInit {

  constructor(private _registroSalidaService: RegistroSalidaService) { }

  listaRegistroSalida : RegistroSalidaTO[] = new Array<RegistroSalidaTO>();
  registroSalida : RegistroSalidaTO = new RegistroSalidaTO();

  ngOnInit(): void {
    this.listarRegistro();
  }

  listarRegistro(){
    this._registroSalidaService.listarRegistroSalida().subscribe(
      data => {
        this.listaRegistroSalida = data;
      }
    );
  }

  Guardar(){

    this._registroSalidaService.guardar(this.registroSalida).subscribe(
      data => {
        this.listarRegistro();
        this.LimpiarFormulario();
      }
    )

  }

  LimpiarFormulario(){
    this.registroSalida = new RegistroSalidaTO();
  }
}
