import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
//shared
import { SharedModule } from '../shared/shared.module';
import { UsuariosHistorialSolicitudesComponent } from './usuarios-historial-solicitudes/usuarios-historial-solicitudes.component';

@NgModule({
  declarations: [UsuariosListaComponent, UsuariosHistorialSolicitudesComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedModule,
  ],
})
export class UsuariosModule {}
