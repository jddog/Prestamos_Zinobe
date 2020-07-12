import { Injectable } from '@angular/core';
//Interfaces
import { IUsuario } from '../Interfaces/Usuario';

@Injectable()
export class serviceUsuarios {
  private urlAPI = 'https://dry-atoll-76166.herokuapp.com/AlMundoHotelsAPI/';

  constructor() {}

  obtenerUsuarioPorCedula(cedula: string): IUsuario {
    let usuario: IUsuario = JSON.parse(localStorage.getItem('usuarios')).find(
      (f) => f.Cedula === cedula
    );
    return usuario ? usuario : null;
  }

  obtenerUsuarios(): IUsuario[] {
    let usuarios: IUsuario[] = JSON.parse(localStorage.getItem('usuarios'));
    return usuarios ? usuarios : null;
  }
}
