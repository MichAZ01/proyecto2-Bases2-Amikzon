import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoCorporativoComponent } from './encabezado-corporativo.component';

describe('EncabezadoCorporativoComponent', () => {
  let component: EncabezadoCorporativoComponent;
  let fixture: ComponentFixture<EncabezadoCorporativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoCorporativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoCorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
