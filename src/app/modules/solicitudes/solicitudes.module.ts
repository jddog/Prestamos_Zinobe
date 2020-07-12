import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { SolicitudesNavComponent } from './solicitudes-nav/solicitudes-nav.component';
//shared
import { SharedModule } from '../shared/shared.module';
import { SolicitudesAprobadasComponent } from './solicitudes-aprobadas/solicitudes-aprobadas.component';
import { SolicitudesRechazadasComponent } from './solicitudes-rechazadas/solicitudes-rechazadas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    SolicitudesNavComponent,
    SolicitudesAprobadasComponent,
    SolicitudesRechazadasComponent,
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedModule,
  ],
})
export class SolicitudesModule {}
