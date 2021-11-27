import { Component, OnInit } from '@angular/core';
import { RegistroService } from './service/registro.service';
import { RegistroTO } from '../interfaces/registroto.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  letras = ['0','1','2','3','4','5','6','7','8','9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(private _registroService: RegistroService) { }

  listaRegistro : RegistroTO[] = new Array<RegistroTO>();
  registro : RegistroTO = new RegistroTO();

  ngOnInit(): void {
    this.listarRegistro();
  }

  listarRegistro(){
    this._registroService.listarRegistro().subscribe(
      data => {
        this.listaRegistro = data;
      }
    );
  }

  Guardar(){

    this._registroService.guardar(this.registro).subscribe(
      data => {
        this.listarRegistro();
        this.LimpiarFormulario();
      }
    )

  }

  LimpiarFormulario(){
    this.registro = new RegistroTO();
  }
}
