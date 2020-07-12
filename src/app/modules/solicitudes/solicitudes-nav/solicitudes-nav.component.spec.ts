import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesNavComponent } from './solicitudes-nav.component';

describe('SolicitudesNavComponent', () => {
  let component: SolicitudesNavComponent;
  let fixture: ComponentFixture<SolicitudesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
