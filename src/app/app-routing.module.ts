import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'prestamos',
    loadChildren: () =>
      import('./modules/prestamos/prestamos.module').then(
        (m) => m.PrestamosModule
      ),
  },
  {
    path: 'solicitudes',
    loadChildren: () =>
      import('./modules/solicitudes/solicitudes.module').then(
        (m) => m.SolicitudesModule
      ),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modules/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
