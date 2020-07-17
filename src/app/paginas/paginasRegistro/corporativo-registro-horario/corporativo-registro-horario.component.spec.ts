import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporativoRegistroHorarioComponent } from './corporativo-registro-horario.component';

describe('CorporativoRegistroHorarioComponent', () => {
  let component: CorporativoRegistroHorarioComponent;
  let fixture: ComponentFixture<CorporativoRegistroHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporativoRegistroHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporativoRegistroHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
