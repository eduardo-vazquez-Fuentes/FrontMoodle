import { TestBed } from '@angular/core/testing';

import { DatoPlataformaService } from './dato-plataforma.service';

describe('DatoPlataformaService', () => {
  let service: DatoPlataformaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoPlataformaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
