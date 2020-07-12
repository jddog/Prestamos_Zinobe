import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontoBaseBancoComponent } from './monto-base-banco.component';

describe('MontoBaseBancoComponent', () => {
  let component: MontoBaseBancoComponent;
  let fixture: ComponentFixture<MontoBaseBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontoBaseBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontoBaseBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
