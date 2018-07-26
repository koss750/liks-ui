import { TestBed, inject } from '@angular/core/testing';

import { DocserviceService } from './docservice.service';

describe('DocserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocserviceService]
    });
  });

  it('should be created', inject([DocserviceService], (service: DocserviceService) => {
    expect(service).toBeTruthy();
  }));
});
