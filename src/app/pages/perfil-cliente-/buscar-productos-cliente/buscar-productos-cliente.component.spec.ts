import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductosClienteComponent } from './buscar-productos-cliente.component';

describe('BuscarProductosClienteComponent', () => {
  let component: BuscarProductosClienteComponent;
  let fixture: ComponentFixture<BuscarProductosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarProductosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarProductosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
