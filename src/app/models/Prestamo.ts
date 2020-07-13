//Environment
import { environment } from '../../environments/environment';
//Interfaces
import { IUsuario } from '../Interfaces/Usuario';

export class Prestamo implements IUsuario {
  _id: string;
  Cedula: string;
  Nombre: string;
  Email: string;
  FechaPago: string;
  usuarioRechazado: boolean;
  Valor: number;
  EstadoCredito: string;
  CreditoPagado: boolean;

  constructor(
    _id?: string,
    Cedula?: string,
    Nombre?: string,
    Email?: string,
    usuarioRechazado?: boolean,
    Valor?: number,
    FechaPago?: string
  ) {
    this._id = _id;
    this.Cedula = Cedula;
    this.Nombre = Nombre;
    this.Email = Email;
    this.usuarioRechazado = usuarioRechazado;
    this.Valor = Valor;
    this.EstadoCredito = this.asignarEstadoCreditoSort();
    this.CreditoPagado = false;
    this.FechaPago = FechaPago;
  }

  asignarEstadoCreditoSort(): string {
    return environment.estadosCredito[Math.floor(Math.random() * 2)];
  }
}
