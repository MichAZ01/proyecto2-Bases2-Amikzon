import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoVendedorComponent } from './encabezado-vendedor.component';

describe('EncabezadoVendedorComponent', () => {
  let component: EncabezadoVendedorComponent;
  let fixture: ComponentFixture<EncabezadoVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
