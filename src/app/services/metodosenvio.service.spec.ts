import { TestBed } from '@angular/core/testing';

import { MetodosenvioService } from './metodosenvio.service';

describe('MetodosenvioService', () => {
  let service: MetodosenvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodosenvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
