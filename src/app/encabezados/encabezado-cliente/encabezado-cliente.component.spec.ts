import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoClienteComponent } from './encabezado-cliente.component';

describe('EncabezadoClienteComponent', () => {
  let component: EncabezadoClienteComponent;
  let fixture: ComponentFixture<EncabezadoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
