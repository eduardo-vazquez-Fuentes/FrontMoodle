import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePersonaComponent } from './mensaje-persona.component';

describe('MensajePersonaComponent', () => {
  let component: MensajePersonaComponent;
  let fixture: ComponentFixture<MensajePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajePersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
