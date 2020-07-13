import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPersonalizadoComponent } from './alert-personalizado.component';

describe('AlertPersonalizadoComponent', () => {
  let component: AlertPersonalizadoComponent;
  let fixture: ComponentFixture<AlertPersonalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPersonalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
