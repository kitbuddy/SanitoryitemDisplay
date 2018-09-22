import { TestBed, inject } from '@angular/core/testing';

import { ProvideTestJsonService } from './provide-test-json.service';
import { HttpClient } from '@angular/common/http/src/client';

describe('ProvideTestJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvideTestJsonService,  HttpClient]
    });
  });

  it('should be created', inject([ProvideTestJsonService], (service: ProvideTestJsonService) => {
    expect(service).toBeTruthy();
  }));
});
