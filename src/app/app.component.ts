import { Component } from '@angular/core';
import { IUsuario } from './Interfaces/Usuario';
import { Prestamo } from './models/Prestamo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appPrestamos';

  constructor() {
    let usuarios: IUsuario[] = [
      { Cedula: '123', Nombre: 'daniel', Email: 'correo' },
    ];

    let prestamos: Prestamo[] = [];

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('prestamos', JSON.stringify(prestamos));
  }
}
