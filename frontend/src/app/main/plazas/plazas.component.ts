import { PlazasService } from './service/plazas.service';
import { Component, OnInit } from '@angular/core';
import { PlazasTO } from '../interfaces/plazasto.interface';

@Component({
  selector: 'app-plazas',
  templateUrl: './plazas.component.html',
  styleUrls: ['./plazas.component.css']
})
export class PlazasComponent implements OnInit {

  constructor(private _plazasService:PlazasService) { }

  listaPlazas: PlazasTO[] = new Array<PlazasTO>();
  plazas: PlazasTO = new PlazasTO();

  ngOnInit(): void {
    this.listarPlazas();
  }

  listarPlazas(){
    this._plazasService.listarPlazas().subscribe(
      data => {
        this.listaPlazas = data;
      }
    );
  }
}
