import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoInputMontoComponent } from './prestamo-input-monto.component';

describe('PrestamoInputMontoComponent', () => {
  let component: PrestamoInputMontoComponent;
  let fixture: ComponentFixture<PrestamoInputMontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoInputMontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoInputMontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
