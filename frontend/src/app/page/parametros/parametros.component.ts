import { Component, OnInit } from '@angular/core';
import { ParametrosTO } from '../../interfaces/parametrosto.interface';
import { ParametrosService } from './service/parametros.service';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  constructor(private _parametrosService:ParametrosService) { }

  listaParametros: ParametrosTO[] = new Array<ParametrosTO>();
  parametro: ParametrosTO = new ParametrosTO();

  ngOnInit(): void {
    this.listarParametros();
  }

  listarParametros(){
    this. _parametrosService.listarParametros().subscribe(
      data => {
        this.listaParametros = data;
      }
    );
  }


}
