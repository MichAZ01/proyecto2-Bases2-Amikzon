import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPersonalVendedorComponent } from './informacion-personal-vendedor.component';

describe('InformacionPersonalVendedorComponent', () => {
  let component: InformacionPersonalVendedorComponent;
  let fixture: ComponentFixture<InformacionPersonalVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionPersonalVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPersonalVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
