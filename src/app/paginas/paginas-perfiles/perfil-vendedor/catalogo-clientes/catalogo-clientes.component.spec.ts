import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoClientesComponent } from './catalogo-clientes.component';

describe('CatalogoClientesComponent', () => {
  let component: CatalogoClientesComponent;
  let fixture: ComponentFixture<CatalogoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
