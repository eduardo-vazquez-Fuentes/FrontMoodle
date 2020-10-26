import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoPlataformaComponent } from './dato-plataforma.component';

describe('DatoPlataformaComponent', () => {
  let component: DatoPlataformaComponent;
  let fixture: ComponentFixture<DatoPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoPlataformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
