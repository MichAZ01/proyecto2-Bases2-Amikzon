import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIniciarSesionComponent } from './pagina-iniciar-sesion.component';

describe('PaginaIniciarSesionComponent', () => {
  let component: PaginaIniciarSesionComponent;
  let fixture: ComponentFixture<PaginaIniciarSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaIniciarSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaIniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
