import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//interfaces
import { Prestamo } from '../models/Prestamo';
//environment
import { environment } from '../../environments/environment';

@Injectable()
export class servicePrestamos {
  private urlAPI = environment.urlAPI + 'prestamos';

  constructor(private _http: HttpClient) {}

  crearPrestamo(usuarioPrestamo: Prestamo): Observable<boolean> {
    return this._http.post<boolean>(this.urlAPI + '/registrarPrestamo', {
      usuarioPrestamo,
    });
  }

  pagarPrestamo(prestamo: Prestamo): Observable<boolean> {
    return this._http.post<boolean>(this.urlAPI + '/pagarPrestamo', {
      prestamo,
    });
  }

  ObtenerPrestamosPorEstado(estadoFiltro: string): Observable<Prestamo[]> {
    return this._http.get<Prestamo[]>(
      this.urlAPI + '/obtenerPrestamosPorEstado/' + estadoFiltro
    );
  }

  ObtenerPrestamosPorCedula(Cedula: string): Observable<Prestamo[]> {
    return this._http.get<Prestamo[]>(
      this.urlAPI + '/obtenerHistorialPrestamosPorCedula/' + Cedula
    );
  }

  obtenerPrestamoPorPagarPorCedula(Cedula: string): Observable<Prestamo> {
    return this._http.get<Prestamo>(
      this.urlAPI + '/obtenerPrestamoPorPagarPorCedula/' + Cedula
    );
  }
}
