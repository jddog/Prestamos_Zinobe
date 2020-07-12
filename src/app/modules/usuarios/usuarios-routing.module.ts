import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosHistorialSolicitudesComponent } from './usuarios-historial-solicitudes/usuarios-historial-solicitudes.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosListaComponent,
  },
  {
    path: 'historialsolicitudesPrestamos/:cedula',
    component: UsuariosHistorialSolicitudesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
