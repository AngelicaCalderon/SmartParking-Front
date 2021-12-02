import { ParametrosTO } from './../../interfaces/parametrosto.interface';
import { Component, OnInit } from '@angular/core';
import { RegistroService } from './service/registro.service';
import { RegistroTO } from '../../interfaces/registroto.interface';
import { ParametrosService } from '../parametros/service/parametros.service';
import { DatePipe } from '@angular/common';


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
      this.AsignarFecha();
      this._registroService.guardar(this.registro).subscribe(
        data => {
          this.listarRegistro();
        }
      )
    }
      else {
       this.Actualizar();
     }
    this.LimpiarFormulario();
  }

  Actualizar(){
    this.AsignarFecha();
    this.TotalPagar();
    this._registroService.actualizar(this.registro).subscribe(
      data => {
         this.listarRegistro();
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

  AsignarFecha(){
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth()+1;
    var anio = fecha.getFullYear();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    if (this.registro.hora_ingreso==""){
      this.registro.hora_ingreso = String(anio+"-"+mes+"-"+dia+" "+hora+":"+minutos);
    } else {
      this.registro.hora_salida = String(anio+"-"+mes+"-"+dia+" "+hora+":"+minutos);
    }
  }

  TotalPagar(){
    var tarifamoto = 50;
    var tarifacarro = 70;
    var valorPagar = 0;
    var tiempoParqueo = (Date.parse(this.registro.hora_salida) - Date.parse(this.registro.hora_ingreso))/60000;
    alert ("hola "+ (this.registro.hora_salida));
    alert ("hola "+ (this.registro.hora_ingreso));

    if (this.registro.tipo_vehiculo =="Carro"){

     valorPagar = (tiempoParqueo*tarifacarro)
     this.registro.total_pagar = valorPagar.toString()
    } else  {
      valorPagar = (tiempoParqueo*tarifamoto)
     this.registro.total_pagar = valorPagar.toString()
    }
     alert ("Su vehiculo"+ this.registro.placa_vehiculo + "permaneció parqueado por: "+ tiempoParqueo + "y su valor a pagar es de: " + valorPagar);

  }
}
