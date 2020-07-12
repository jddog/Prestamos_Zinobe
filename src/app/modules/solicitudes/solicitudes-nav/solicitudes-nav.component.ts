import { Component, OnInit } from '@angular/core';
import { servicePrestamos } from '../../../services/servicePrestamos';
//models
import { Prestamo } from '../../../models/Prestamo';

@Component({
  selector: 'app-solicitudes-nav',
  templateUrl: './solicitudes-nav.component.html',
  styleUrls: ['./solicitudes-nav.component.scss'],
  providers: [servicePrestamos],
})
export class SolicitudesNavComponent implements OnInit {
  solicitudesPrestamosAprobados: Prestamo[];
  solicitudesPrestamosRechazados: Prestamo[];
  active = 1;
  constructor(private servicePrestamos: servicePrestamos) {
    this.solicitudesPrestamosAprobados = this.servicePrestamos.ObtenerPrestamosAprobados();
    this.solicitudesPrestamosRechazados = this.servicePrestamos.ObtenerPrestamosRechazados();
  }

  ngOnInit(): void {}
}
