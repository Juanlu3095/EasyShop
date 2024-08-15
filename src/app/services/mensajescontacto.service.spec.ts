import { TestBed } from '@angular/core/testing';

import { MensajescontactoService } from './mensajescontacto.service';

describe('MensajescontactoService', () => {
  let service: MensajescontactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajescontactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
