import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*fortawesome*/
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
//models
import { Prestamo } from '../../../models/Prestamo';
//services
import { servicePrestamos } from '../../../services/servicePrestamos';

@Component({
  selector: 'app-usuarios-historial-solicitudes',
  templateUrl: './usuarios-historial-solicitudes.component.html',
  styleUrls: ['./usuarios-historial-solicitudes.component.scss'],
  providers: [servicePrestamos],
})
export class UsuariosHistorialSolicitudesComponent implements OnInit {
  solicitudesPrestamosHistorial: Prestamo[];

  constructor(
    private servicePrestamos: servicePrestamos,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.solicitudesPrestamosHistorial = this.servicePrestamos.ObtenerPrestamosPorCedula(
      this.router.snapshot.params.cedula
    );
  }
}
