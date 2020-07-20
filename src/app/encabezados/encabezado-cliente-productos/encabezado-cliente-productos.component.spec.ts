import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoClienteProductosComponent } from './encabezado-cliente-productos.component';

describe('EncabezadoClienteProductosComponent', () => {
  let component: EncabezadoClienteProductosComponent;
  let fixture: ComponentFixture<EncabezadoClienteProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoClienteProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoClienteProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
