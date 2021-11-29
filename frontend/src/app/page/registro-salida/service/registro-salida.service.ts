import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroSalidaTO } from '../../../interfaces/registroSalidato.interface';


@Injectable({
  providedIn: 'root'
})
export class RegistroSalidaService {

  url:string = "http://127.0.0.1:1400/api/registroSalida";

  constructor(private _http: HttpClient) { }

  listarRegistroSalida(): Observable<RegistroSalidaTO[]> {
    return this._http.get<RegistroSalidaTO[]>(this.url);
  }

  guardar(registroSalida: RegistroSalidaTO) : Observable<RegistroSalidaTO> {
    return this._http.post<RegistroSalidaTO>(this.url, registroSalida);
  }

  actualizar(registroSalida: RegistroSalidaTO) : Observable<RegistroSalidaTO> {
    return this._http.put<RegistroSalidaTO>(this.url, registroSalida);
  }

  eliminar(id: string) : Observable<string> {
    return this._http.delete<string>(this.url + "/" + id);
  }

}
