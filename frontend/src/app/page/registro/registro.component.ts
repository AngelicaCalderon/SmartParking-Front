import { Component, OnInit } from '@angular/core';
import { RegistroService } from './service/registro.service';
import { RegistroTO } from '../../interfaces/registroto.interface';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

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

    if (this.registro._id == "") {

      this._registroService.guardar(this.registro).subscribe(
        data => {
          this.listarRegistro();
          this.LimpiarFormulario();
        }
      )
    } else {
      this.Actualizar();
    }

  }

  Actualizar(){

    this._registroService.actualizar(this.registro).subscribe(
      data => {
        this.listarRegistro();
        this.LimpiarFormulario();
      }
    )

  }

  VerRegitro(pRegistro: RegistroTO){
    this.registro = pRegistro
  }

  Eliminar(id: string){
    this._registroService.eliminar(id).subscribe(
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
