import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestamoSolicitudComponent } from './prestamo-solicitud/prestamo-solicitud.component';

const routes: Routes = [
  {
    path: '',
    component: PrestamoSolicitudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamosRoutingModule {}
