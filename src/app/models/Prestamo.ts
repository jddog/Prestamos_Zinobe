//Environment
import { environment } from '../../environments/environment';
//Interfaces
import { IUsuario } from '../Interfaces/Usuario';

export class Prestamo implements IUsuario {
  Id: number;
  Cedula: string;
  Nombre: string;
  Email: string;
  Valor: number;
  EstadoCredito: string;
  CreditoPagado: boolean;

  constructor(
    Id?: number,
    Cedula?: string,
    Nombre?: string,
    Email?: string,
    Valor?: number
  ) {
    this.Id = Id;
    this.Cedula = Cedula;
    this.Nombre = Nombre;
    this.Email = Email;
    this.Valor = Valor;
    this.EstadoCredito = this.asignarEstadoCreditoSort();
    this.CreditoPagado = false;
  }

  asignarEstadoCreditoSort(): string {
    return environment.estadosCredito[Math.floor(Math.random() * 2)];
  }
}
