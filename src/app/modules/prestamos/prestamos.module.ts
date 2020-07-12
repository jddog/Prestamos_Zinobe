import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { PrestamoSolicitudComponent } from './prestamo-solicitud/prestamo-solicitud.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrestamoInputMontoComponent } from './prestamo-input-monto/prestamo-input-monto.component';
//shared
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PrestamoSolicitudComponent, PrestamoInputMontoComponent],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
  ],
})
export class PrestamosModule {}
