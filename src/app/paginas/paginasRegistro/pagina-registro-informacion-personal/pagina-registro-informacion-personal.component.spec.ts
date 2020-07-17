import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegistroInformacionPersonalComponent } from './pagina-registro-informacion-personal.component';

describe('PaginaRegistroInformacionPersonalComponent', () => {
  let component: PaginaRegistroInformacionPersonalComponent;
  let fixture: ComponentFixture<PaginaRegistroInformacionPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRegistroInformacionPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRegistroInformacionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
