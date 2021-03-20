import { TestBed } from '@angular/core/testing';

import { FotosServicoService } from './fotos-servico.service';

describe('FotosServicoService', () => {
  let service: FotosServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotosServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
