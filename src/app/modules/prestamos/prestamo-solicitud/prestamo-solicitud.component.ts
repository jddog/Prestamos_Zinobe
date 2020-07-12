import { Component, OnInit } from '@angular/core';
import {
  NgbDateStruct,
  NgbInputDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';
/*fortawesome*/
import {
  faSearch,
  faFont,
  faEnvelope,
  faCoins,
  faDollarSign,
  faIdCard,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
/*Services*/
import { serviceUsuarios } from '../../../services/serviceUsuarios';
import { servicePrestamos } from '../../../services/servicePrestamos';
//interfaces
import { IUsuario } from '../../../Interfaces/Usuario';
//modelos
import { Prestamo } from '../../../models/Prestamo';
//environment
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-prestamo-solicitud',
  templateUrl: './prestamo-solicitud.component.html',
  styleUrls: ['./prestamo-solicitud.component.scss'],
  providers: [serviceUsuarios, servicePrestamos, NgbInputDatepickerConfig],
})
export class PrestamoSolicitudComponent implements OnInit {
  flagMostrarAlerta: boolean = false;
  flagMostrarCalendario: boolean = false;
  selected = 0;
  hovered = 0;
  readonly = false;
  usuarioPrestamo: Prestamo;
  flagValidacionUsuario: boolean = false;
  cedula: string = '';
  modeloCalendario: NgbDateStruct;

  iconoLupa = faSearch;
  iconoLetra = faFont;
  iconoMail = faEnvelope;
  iconoDolar = faDollarSign;
  iconoCedula = faIdCard;
  iconoCalendario = faCalendarAlt;

  constructor(
    private serviceUsuarios: serviceUsuarios,
    private servicePrestamos: servicePrestamos,
    private modeloCalendarioConfiguracion: NgbInputDatepickerConfig
  ) {
    modeloCalendarioConfiguracion.minDate = { year: 2020, month: 7, day: 7 };
    modeloCalendarioConfiguracion.outsideDays = 'hidden';
  }

  ngOnInit(): void {}

  recibirValorMonto(valorMonto: number) {
    this.usuarioPrestamo.Valor = valorMonto;
  }

  validarUsuario() {
    if (this.cedula !== '') {
      this.flagValidacionUsuario = true;
      let usuarioValidado: IUsuario = this.serviceUsuarios.obtenerUsuarioPorCedula(
        this.cedula
      );

      this.usuarioPrestamo = usuarioValidado
        ? new Prestamo(
            1,
            usuarioValidado.Cedula,
            usuarioValidado.Nombre,
            usuarioValidado.Email
          )
        : new Prestamo();
    } else {
      console.log('Tienes que ingresar una cedula');
    }
  }

  solicitudCredito() {
    this.usuarioPrestamo.Cedula = this.cedula;
    if (this.servicePrestamos.crearPrestamo(this.usuarioPrestamo)) {
      environment.capitalBaseBanco =
        environment.capitalBaseBanco - this.usuarioPrestamo.Valor;
    }
  }
}
