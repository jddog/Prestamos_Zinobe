import { Component, OnInit } from '@angular/core';
import { servicePrestamos } from '../../../services/servicePrestamos';
//models
import { Prestamo } from '../../../models/Prestamo';
//environment
import { environment } from '../../../../environments/environment';

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
    this.consultarPrestamosDisponibles();

    this.servicePrestamos
      .ObtenerPrestamosPorEstado(environment.estadoCreditoRechazado)
      .subscribe(
        (prestamosRechazados: Prestamo[]) => {
          this.solicitudesPrestamosRechazados = prestamosRechazados;
        },
        (error: any) => {
          console.log('Error consultando prestamos rechazados');
        }
      );
  }

  ngOnInit(): void {}

  consultarPrestamosDisponibles() {
    this.servicePrestamos
      .ObtenerPrestamosPorEstado(environment.estadoCreditoAprobado)
      .subscribe(
        (prestamosAprobados: Prestamo[]) => {
          this.solicitudesPrestamosAprobados = prestamosAprobados;
        },
        (error: any) => {
          console.log('Error consultando prestamos aprobados');
        }
      );
  }
  pagarPrestamo(prestamo: Prestamo) {
    this.servicePrestamos.pagarPrestamo(prestamo).subscribe(
      (flagPrestamoPagado: boolean) => {
        if (flagPrestamoPagado) {
          environment.capitalBaseBanco =
            environment.capitalBaseBanco + prestamo.Valor;
          this.consultarPrestamosDisponibles();
        }
      },
      (error: any) => {
        console.log('Error pagando el prestamo');
      }
    );
  }
}
