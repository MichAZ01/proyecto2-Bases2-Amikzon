import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoInicioSesionComponent } from './encabezado-inicio-sesion.component';

describe('EncabezadoInicioSesionComponent', () => {
  let component: EncabezadoInicioSesionComponent;
  let fixture: ComponentFixture<EncabezadoInicioSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoInicioSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
