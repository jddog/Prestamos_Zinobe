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
  flagNoti = true;

  fromDate: NgbDate | null;

  constructor(
    private serviceUsuarios: serviceUsuarios,
    private servicePrestamos: servicePrestamos,
    private modeloCalendarioConfiguracion: NgbInputDatepickerConfig,
    private calendar: NgbCalendar
  ) {
    this.fromDate = calendar.getToday();
    this.fromDate.day += 1;
  }

  ngOnInit(): void {}

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
          console.log('Error consultando usuario');
        }
      );
    } else {
      console.log('Tienes que ingresar una cedula');
    }
  }

  solicitudCredito() {
    this.usuarioPrestamo.Cedula = this.cedula;
    if (this.modeloCalendario) {
      this.usuarioPrestamo.FechaPago = `${this.modeloCalendario.year}/${this.modeloCalendario.month}/${this.modeloCalendario.day}`;
    }

    if (this.usuarioPrestamo.usuarioRechazado) {
      console.log(
        'Lo sentimos, anteriormente ya se le rechazo la solicitud de un prestamo'
      );
    } else {
      this.servicePrestamos
        .obtenerPrestamoPorPagarPorCedula(this.cedula)
        .subscribe(
          (prestamoPorPagar: Prestamo) => {
            if (prestamoPorPagar) {
              console.log(
                'Lo sentimos, tienes un prestamo pendiente por pagar de un valor de:' +
                  prestamoPorPagar.Valor
              );
            } else {
              this.servicePrestamos
                .crearPrestamo(this.usuarioPrestamo)
                .subscribe(
                  (resultado: boolean) => {
                    environment.capitalBaseBanco =
                      environment.capitalBaseBanco - this.usuarioPrestamo.Valor;
                  },
                  (error: any) => {
                    console.log('Error creando el prestamo');
                  }
                );
            }
          },
          (error: any) => {
            console.log('Error creando el prestamo');
          }
        );
    }
  }
}
