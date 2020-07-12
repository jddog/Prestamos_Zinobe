import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/*fortawesome*/
import { faDollarSign, faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prestamo-input-monto',
  templateUrl: './prestamo-input-monto.component.html',
  styleUrls: ['./prestamo-input-monto.component.scss'],
})
export class PrestamoInputMontoComponent implements OnInit {
  Valor: number;
  iconoMoneda = faCoins;
  iconoDolar = faDollarSign;
  @Output() montoChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  emitirValor(event: any) {
    this.montoChange.emit(event.target.value);
  }
}
