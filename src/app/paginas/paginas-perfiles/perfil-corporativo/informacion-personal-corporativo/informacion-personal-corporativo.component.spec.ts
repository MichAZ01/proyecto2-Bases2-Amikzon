import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPersonalCorporativoComponent } from './informacion-personal-corporativo.component';

describe('InformacionPersonalCorporativoComponent', () => {
  let component: InformacionPersonalCorporativoComponent;
  let fixture: ComponentFixture<InformacionPersonalCorporativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionPersonalCorporativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPersonalCorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
