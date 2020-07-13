import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MontoBaseBancoComponent } from './monto-base-banco/monto-base-banco.component';
import { AlertPersonalizadoComponent } from './alert-personalizado/alert-personalizado.component';

@NgModule({
  declarations: [MontoBaseBancoComponent, AlertPersonalizadoComponent],
  imports: [CommonModule, NgbModule, FontAwesomeModule],
  exports: [MontoBaseBancoComponent, AlertPersonalizadoComponent],
})
export class SharedModule {}
