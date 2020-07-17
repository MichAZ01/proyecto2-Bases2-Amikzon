import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteRegistroDireccionComponent } from './cliente-registro-direccion.component';

describe('ClienteRegistroDireccionComponent', () => {
  let component: ClienteRegistroDireccionComponent;
  let fixture: ComponentFixture<ClienteRegistroDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteRegistroDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteRegistroDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
