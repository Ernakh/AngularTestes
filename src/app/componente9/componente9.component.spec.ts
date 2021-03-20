import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente9Component } from './componente9.component';

describe('Componente9Component', () => {
  let component: Componente9Component;
  let fixture: ComponentFixture<Componente9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
