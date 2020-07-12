import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*fortawesome*/
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
//Interface
import { IUsuario } from '../../../Interfaces/Usuario';
//services
import { serviceUsuarios } from '../../../services/serviceUsuarios';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.scss'],
  providers: [serviceUsuarios],
})
export class UsuariosListaComponent implements OnInit {
  Usuarios: IUsuario[];
  IconoHistorial = faFileAlt;

  constructor(
    private serviceUsuarios: serviceUsuarios,
    private router: Router
  ) {
    this.Usuarios = this.serviceUsuarios.obtenerUsuarios();
  }

  ngOnInit(): void {}

  verHistorial(cedulaUsuario: string) {
    this.router.navigate([
      '/usuarios/historialsolicitudesPrestamos',
      cedulaUsuario,
    ]);
  }
}
