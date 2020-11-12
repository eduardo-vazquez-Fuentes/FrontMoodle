import { TestBed } from '@angular/core/testing';

import { DatoPersonalService } from './dato-personal.service';

describe('DatoPersonalService', () => {
  let service: DatoPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
