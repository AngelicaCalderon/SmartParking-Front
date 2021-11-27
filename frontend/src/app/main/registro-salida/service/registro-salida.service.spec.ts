import { TestBed } from '@angular/core/testing';

import { RegistroSalidaService } from './registro-salida.service';

describe('RegistroSalidaService', () => {
  let service: RegistroSalidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroSalidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
