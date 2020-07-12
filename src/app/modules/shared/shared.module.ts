import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MontoBaseBancoComponent } from './monto-base-banco/monto-base-banco.component';

@NgModule({
  declarations: [MontoBaseBancoComponent],
  imports: [CommonModule, NgbModule, FontAwesomeModule],
  exports: [MontoBaseBancoComponent],
})
export class SharedModule {}
