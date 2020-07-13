import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
/*fortawesome*/
import { faUniversity, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-monto-base-banco',
  templateUrl: './monto-base-banco.component.html',
  styleUrls: ['./monto-base-banco.component.scss'],
})
export class MontoBaseBancoComponent implements OnInit {
  valorCapitalBaseBanco: number;
  iconoBanco = faUniversity;
  iconoAhorros = faPiggyBank;
  constructor() {
    this.valorCapitalBaseBanco = environment.capitalBaseBanco;
  }

  ngOnInit(): void {}
}
