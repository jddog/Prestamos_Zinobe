import { Component, OnInit, Input } from '@angular/core';
//models
import { Prestamo } from '../../../models/Prestamo';
/*fortawesome*/
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solicitudes-aprobadas',
  templateUrl: './solicitudes-aprobadas.component.html',
  styleUrls: ['./solicitudes-aprobadas.component.scss'],
})
export class SolicitudesAprobadasComponent implements OnInit {
  @Input() solicitudesAprobadas: Prestamo[];

  iconoCarritoCompras = faShoppingCart;
  constructor() {}

  ngOnInit(): void {}

  pagarPrestamo(solicitudPorPagar: Prestamo) {}
}
