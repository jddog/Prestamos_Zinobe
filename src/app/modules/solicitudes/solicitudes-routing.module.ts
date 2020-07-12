import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesNavComponent } from './solicitudes-nav/solicitudes-nav.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesNavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesRoutingModule {}
