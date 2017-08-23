import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Informe1Component } from './informe-1.component';

describe('Informe1Component', () => {
  let component: Informe1Component;
  let fixture: ComponentFixture<Informe1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Informe1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Informe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
