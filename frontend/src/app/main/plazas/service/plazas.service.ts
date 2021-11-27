import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { PlazasTO } from '../../interfaces/plazasto.interface';


@Injectable({
  providedIn: 'root'
})
export class PlazasService {

  url:string = "https://smartparkingbackangelica.herokuapp.com/api/plazas";

  constructor(private _http: HttpClient) { }

  listarPlazas(): Observable<PlazasTO[]> {
    return this._http.get<PlazasTO[]>(this.url);
  }

  guardar(plaza: PlazasTO) : Observable<PlazasTO> {
    return this._http.post<PlazasTO>(this.url, plaza);
  }

  actualizar(plaza: PlazasTO) : Observable<PlazasTO> {
    return this._http.put<PlazasTO>(this.url, plaza);
  }

  eliminar(id: string) : Observable<string> {
    return this._http.delete<string>(this.url + "/" + id);
  }
}
