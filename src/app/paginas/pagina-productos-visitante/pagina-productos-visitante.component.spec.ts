import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProductosVisitanteComponent } from './pagina-productos-visitante.component';

describe('PaginaProductosVisitanteComponent', () => {
  let component: PaginaProductosVisitanteComponent;
  let fixture: ComponentFixture<PaginaProductosVisitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaProductosVisitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProductosVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
