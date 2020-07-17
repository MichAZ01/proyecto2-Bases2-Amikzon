import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegistroPrincipalComponent } from './pagina-registro-principal.component';

describe('PaginaRegistroPrincipalComponent', () => {
  let component: PaginaRegistroPrincipalComponent;
  let fixture: ComponentFixture<PaginaRegistroPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRegistroPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRegistroPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
