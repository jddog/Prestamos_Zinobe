import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//models
import { Prestamo } from '../../../models/Prestamo';
/*fortawesome*/
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solicitudes-aprobadas',
  templateUrl: './solicitudes-aprobadas.component.html',
  styleUrls: ['./solicitudes-aprobadas.component.scss'],
})
export class SolicitudesAprobadasComponent implements OnInit {
  @Input() solicitudesAprobadas: Prestamo[];
  @Output() OutPagarPrestamo = new EventEmitter<Prestamo>();

  iconoOk = faCheckCircle;
  constructor() {}

  ngOnInit(): void {}

  pagarPrestamo(prestamo: Prestamo) {
    this.OutPagarPrestamo.emit(prestamo);
  }
}
