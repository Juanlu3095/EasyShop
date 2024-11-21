import { TestBed } from '@angular/core/testing';

import { MetodospagoService } from './metodospago.service';

describe('MetodospagoService', () => {
  let service: MetodospagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodospagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
