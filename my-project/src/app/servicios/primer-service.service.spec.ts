import { TestBed } from '@angular/core/testing';

import { PrimerServiceService } from './servicioCustomer.service';

describe('PrimerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimerServiceService = TestBed.get(PrimerServiceService);
    expect(service).toBeTruthy();
  });
});
