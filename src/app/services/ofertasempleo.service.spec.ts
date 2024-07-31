import { TestBed } from '@angular/core/testing';

import { OfertasempleoService } from './ofertasempleo.service';

describe('OfertasempleoService', () => {
  let service: OfertasempleoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertasempleoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
