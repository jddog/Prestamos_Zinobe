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
  flagMostrarAlerta: boolean = false;
  mensajeAlerta: string = 'warning';
  tipoAlerta: string = '';

  constructor(private servicePrestamos: servicePrestamos) {
    this.consultarPrestamosDisponibles();

    this.servicePrestamos
      .ObtenerPrestamosPorEstado(environment.estadoCreditoRechazado)
      .subscribe(
        (prestamosRechazados: Prestamo[]) => {
          this.solicitudesPrestamosRechazados = prestamosRechazados;
        },
        (error: any) => {
          this.tipoAlerta = 'danger';
          this.mensajeAlerta = 'Error consultando prestamos rechazados';
          this.flagMostrarAlerta = true;
        }
      );
  }

  ngOnInit(): void {}

  cerrarAlerta() {
    this.flagMostrarAlerta = false;
    this.mensajeAlerta = '';
    this.tipoAlerta = '';
  }

  consultarPrestamosDisponibles() {
    this.servicePrestamos
      .ObtenerPrestamosPorEstado(environment.estadoCreditoAprobado)
      .subscribe(
        (prestamosAprobados: Prestamo[]) => {
          this.solicitudesPrestamosAprobados = prestamosAprobados;
        },
        (error: any) => {
          this.tipoAlerta = 'danger';
          this.mensajeAlerta = 'Error consultando prestamos aprobados';
          this.flagMostrarAlerta = true;
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

          this.tipoAlerta = 'success';
          this.mensajeAlerta = 'Has pagado exitosamente tu prestamo';
          this.flagMostrarAlerta = true;
        }
      },
      (error: any) => {
        this.tipoAlerta = 'danger';
        this.mensajeAlerta = 'Error pagando el prestamo';
        this.flagMostrarAlerta = true;
      }
    );
  }
}
