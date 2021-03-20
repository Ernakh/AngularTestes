import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente13Component } from './componente13.component';

describe('Componente13Component', () => {
  let component: Componente13Component;
  let fixture: ComponentFixture<Componente13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
