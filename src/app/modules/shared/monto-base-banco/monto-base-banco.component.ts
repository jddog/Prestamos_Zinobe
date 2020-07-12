import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-monto-base-banco',
  templateUrl: './monto-base-banco.component.html',
  styleUrls: ['./monto-base-banco.component.scss'],
})
export class MontoBaseBancoComponent implements OnInit {
  valorCapitalBaseBanco: number;
  constructor() {
    this.valorCapitalBaseBanco = environment.capitalBaseBanco;
  }

  ngOnInit(): void {}
}
