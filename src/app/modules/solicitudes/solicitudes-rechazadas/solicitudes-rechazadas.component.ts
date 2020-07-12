import { Component, OnInit, Input } from '@angular/core';
//models
import { Prestamo } from '../../../models/Prestamo';

@Component({
  selector: 'app-solicitudes-rechazadas',
  templateUrl: './solicitudes-rechazadas.component.html',
  styleUrls: ['./solicitudes-rechazadas.component.scss'],
})
export class SolicitudesRechazadasComponent implements OnInit {
  @Input() solicitudesRechazadas: Prestamo[];

  constructor() {}

  ngOnInit(): void {}
}
