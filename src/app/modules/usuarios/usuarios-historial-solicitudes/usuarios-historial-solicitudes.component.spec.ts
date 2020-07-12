import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosHistorialSolicitudesComponent } from './usuarios-historial-solicitudes.component';

describe('UsuariosHistorialSolicitudesComponent', () => {
  let component: UsuariosHistorialSolicitudesComponent;
  let fixture: ComponentFixture<UsuariosHistorialSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosHistorialSolicitudesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosHistorialSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
