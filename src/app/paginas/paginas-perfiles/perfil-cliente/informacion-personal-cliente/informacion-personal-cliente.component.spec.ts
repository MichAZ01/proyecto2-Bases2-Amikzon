import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPersonalClienteComponent } from './informacion-personal-cliente.component';

describe('InformacionPersonalClienteComponent', () => {
  let component: InformacionPersonalClienteComponent;
  let fixture: ComponentFixture<InformacionPersonalClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionPersonalClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPersonalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
