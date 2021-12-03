import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroTO } from '../../../interfaces/registroto.interface';



@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  //url:string = "http://127.0.0.1:4000/api/registro";
  url:string = "https://smartparkingbackangelica.herokuapp.com/api/registro";
  constructor(private _http: HttpClient) { }

  listarRegistro(): Observable<RegistroTO[]> {
    return this._http.get<RegistroTO[]>(this.url);
  }

  guardar(registro: RegistroTO) : Observable<RegistroTO> {
    return this._http.post<RegistroTO>(this.url, registro);
  }

  actualizar(registro: RegistroTO) : Observable<RegistroTO> {
    return this._http.put<RegistroTO>(this.url, registro);
    }

  eliminar(id: string) : Observable<string> {
    return this._http.delete<string>(this.url + "/" + id);
  }

}
