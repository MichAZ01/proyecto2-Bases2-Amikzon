import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoPrincipalComponent } from './encabezado-principal.component';

describe('EncabezadoPrincipalComponent', () => {
  let component: EncabezadoPrincipalComponent;
  let fixture: ComponentFixture<EncabezadoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
