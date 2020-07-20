import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturarProductosClienteComponent } from './facturar-productos-cliente.component';

describe('FacturarProductosClienteComponent', () => {
  let component: FacturarProductosClienteComponent;
  let fixture: ComponentFixture<FacturarProductosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturarProductosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturarProductosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
