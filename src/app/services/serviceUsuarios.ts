import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Interfaces
import { IUsuario } from '../Interfaces/Usuario';

@Injectable()
export class serviceUsuarios {
  private urlAPI = 'http://localhost:9000/usuarios';
  constructor(private _http: HttpClient) {}

  obtenerUsuarioPorCedula(cedula: string): Observable<IUsuario> {
    return this._http.get<IUsuario>(
      this.urlAPI + '/obtenerUsuarioPorCedula/' + cedula
    );
  }

  obtenerUsuarios(): Observable<IUsuario[]> {
    return this._http.get<IUsuario[]>(this.urlAPI + '/obtenerUsuarios');
  }
}
