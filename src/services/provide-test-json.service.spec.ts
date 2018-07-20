import { TestBed, inject } from '@angular/core/testing';

import { ProvideTestJsonService } from './provide-test-json.service';

describe('ProvideTestJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvideTestJsonService]
    });
  });

  it('should be created', inject([ProvideTestJsonService], (service: ProvideTestJsonService) => {
    expect(service).toBeTruthy();
  }));
});
