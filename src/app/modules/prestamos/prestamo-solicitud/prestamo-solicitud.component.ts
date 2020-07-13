import { Component, OnInit } from '@angular/core';
import {
  NgbDateStruct,
  NgbDate,
  NgbInputDatepickerConfig,
  NgbCalendar,
} from '@ng-bootstrap/ng-bootstrap';
/*fortawesome*/
import {
  faSearch,
  faFont,
  faEnvelope,
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
  mensajeAlerta: string = 'warning';
  tipoAlerta: string = '';
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
  fromDate: NgbDate | null;

  constructor(
    private serviceUsuarios: serviceUsuarios,
    private servicePrestamos: servicePrestamos,
    private calendar: NgbCalendar
  ) {
    this.fromDate = calendar.getToday();
    this.fromDate.day += 1;
  }

  ngOnInit(): void {}

  cerrarAlerta() {
    this.flagMostrarAlerta = false;
    this.mensajeAlerta = '';
    this.tipoAlerta = '';
  }

  recibirValorMonto(valorMonto: number) {
    this.usuarioPrestamo.Valor = valorMonto;
  }

  validarUsuario() {
    if (this.cedula !== '') {
      this.flagValidacionUsuario = true;
      this.usuarioPrestamo = new Prestamo();
      this.serviceUsuarios.obtenerUsuarioPorCedula(this.cedula).subscribe(
        (usuarioConsultado: IUsuario) => {
          this.usuarioPrestamo = usuarioConsultado
            ? new Prestamo(
                usuarioConsultado._id,
                usuarioConsultado.Cedula,
                usuarioConsultado.Nombre,
                usuarioConsultado.Email,
                usuarioConsultado.usuarioRechazado
              )
            : new Prestamo();
        },
        (error: any) => {
          this.tipoAlerta = 'danger';
          this.mensajeAlerta = 'Error consultando usuario';
          this.flagMostrarAlerta = true;
        }
      );
    } else {
      this.tipoAlerta = 'warning';
      this.mensajeAlerta = 'Tienes que ingresar la cédula';
      this.flagMostrarAlerta = true;
    }
  }

  solicitudCredito() {
    this.usuarioPrestamo.Cedula = this.cedula;
    if (this.modeloCalendario) {
      this.usuarioPrestamo.FechaPago = `${this.modeloCalendario.year}/${this.modeloCalendario.month}/${this.modeloCalendario.day}`;
    }

    if (this.usuarioPrestamo.usuarioRechazado) {
      this.limpiarVariables();
      this.tipoAlerta = 'warning';
      this.mensajeAlerta =
        'Lo sentimos, anteriormente ya se le rechazo la solicitud de un prestamo';
      this.flagMostrarAlerta = true;
    } else {
      this.servicePrestamos
        .obtenerPrestamoPorPagarPorCedula(this.cedula)
        .subscribe(
          (prestamoPorPagar: Prestamo) => {
            if (prestamoPorPagar) {
              this.tipoAlerta = 'warning';
              this.mensajeAlerta =
                'Lo sentimos, tienes un prestamo pendiente por pagar de un valor de:' +
                prestamoPorPagar.Valor;
              this.flagMostrarAlerta = true;
              this.limpiarVariables();
            } else {
              this.servicePrestamos
                .crearPrestamo(this.usuarioPrestamo)
                .subscribe(
                  (resultado: boolean) => {
                    if (resultado) {
                      environment.capitalBaseBanco =
                        environment.capitalBaseBanco -
                        this.usuarioPrestamo.Valor;

                      this.tipoAlerta = 'success';
                      this.mensajeAlerta =
                        'Se registro el prestamo correctamente y ha sido ' +
                        (this.usuarioPrestamo._id
                          ? this.usuarioPrestamo.EstadoCredito
                          : 'Aprobado');
                      this.flagMostrarAlerta = true;

                      this.limpiarVariables();
                    }
                  },
                  (error: any) => {
                    this.tipoAlerta = 'danger';
                    this.mensajeAlerta = 'Error creando el prestamo';
                    this.flagMostrarAlerta = true;
                    this.limpiarVariables();
                  }
                );
            }
          },
          (error: any) => {
            this.limpiarVariables();
            this.tipoAlerta = 'danger';
            this.mensajeAlerta = 'Error creando el prestamo';
            this.flagMostrarAlerta = true;
          }
        );
    }
  }

  limpiarVariables() {
    this.usuarioPrestamo = new Prestamo();
    this.cedula = '';
    this.modeloCalendario = null;
    this.flagMostrarCalendario = false;
    this.flagValidacionUsuario = false;
  }
}
