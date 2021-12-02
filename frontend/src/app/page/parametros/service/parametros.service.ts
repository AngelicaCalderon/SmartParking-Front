import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ParametrosTO } from '../../../interfaces/parametrosto.interface';


@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  url:string = "http://127.0.0.1:4000/api/parametros";

  //url: string = "https://smartparkingbackangelica.herokuapp.com/api/parametros"

  constructor(private _http: HttpClient) { }
  listarParametros(): Observable<ParametrosTO[]> {
    return this._http.get<ParametrosTO[]>(this.url);
  }

  guardar(parametro: ParametrosTO) : Observable<ParametrosTO> {
    return this._http.post<ParametrosTO>(this.url, parametro);
  }

  actualizar(parametro: ParametrosTO) : Observable<ParametrosTO> {
    return this._http.put<ParametrosTO>(this.url, parametro);
  }

  eliminar(id: string) : Observable<string> {
    return this._http.delete<string>(this.url + "/" + id);
  }
}
