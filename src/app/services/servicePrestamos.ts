import { Injectable } from '@angular/core';
//interfaces
import { Prestamo } from '../models/Prestamo';
//modelo
import { IUsuario } from '../Interfaces/Usuario';
//environment
import { environment } from '../../environments/environment';

@Injectable()
export class servicePrestamos {
  private urlAPI = 'https://dry-atoll-76166.herokuapp.com/AlMundoHotelsAPI/';

  constructor() {}

  crearPrestamo(usuarioPrestamo: Prestamo): boolean {
    let usuariosTemporal: IUsuario[] = JSON.parse(
      localStorage.getItem('usuarios')
    );

    if (!usuariosTemporal.find((f) => f.Cedula === usuarioPrestamo.Cedula)) {
      let usuario: IUsuario = {
        Cedula: usuarioPrestamo.Cedula,
        Nombre: usuarioPrestamo.Nombre,
        Email: usuarioPrestamo.Email,
      };
      usuariosTemporal.push(usuario);
      localStorage.setItem('usuarios', JSON.stringify(usuariosTemporal));
    }

    let prestamosTemporal: Prestamo[] = JSON.parse(
      localStorage.getItem('prestamos')
    );

    prestamosTemporal.push(usuarioPrestamo);
    localStorage.setItem('prestamos', JSON.stringify(prestamosTemporal));
    return true;
  }

  ObtenerPrestamosAprobados(): Prestamo[] {
    let prestamosTemporal: Prestamo[] = JSON.parse(
      localStorage.getItem('prestamos')
    );

    return prestamosTemporal.filter(
      (f) => f.EstadoCredito === environment.estadoCreditoAprobado
    );
  }

  ObtenerPrestamosRechazados(): Prestamo[] {
    let prestamosTemporal: Prestamo[] = JSON.parse(
      localStorage.getItem('prestamos')
    );

    return prestamosTemporal.filter(
      (f) => f.EstadoCredito === environment.estadoCreditoRechazado
    );
  }

  ObtenerPrestamosPorCedula(Cedula: string): Prestamo[] {
    let prestamosTemporal: Prestamo[] = JSON.parse(
      localStorage.getItem('prestamos')
    );

    return prestamosTemporal.filter((f) => f.Cedula === Cedula);
  }
}
