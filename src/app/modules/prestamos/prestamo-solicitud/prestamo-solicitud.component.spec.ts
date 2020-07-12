import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoSolicitudComponent } from './prestamo-solicitud.component';

describe('PrestamoSolicitudComponent', () => {
  let component: PrestamoSolicitudComponent;
  let fixture: ComponentFixture<PrestamoSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
