import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-personalizado',
  templateUrl: './alert-personalizado.component.html',
  styleUrls: ['./alert-personalizado.component.scss'],
})
export class AlertPersonalizadoComponent implements OnInit {
  @Input() flagMostrarNotificacion: boolean;
  @Input() textoAlerta: string;
  @Input() tipoAlerta: string;
  @Output() OutCerrarAlerta = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emitirEventoCierre() {
    this.OutCerrarAlerta.emit();
  }
}
