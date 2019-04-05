import { TestBed, inject } from '@angular/core/testing';

import { ResumeAPIService } from './resume-api.service';

describe('ResumeAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeAPIService]
    });
  });

  it('should be created', inject([ResumeAPIService], (service: ResumeAPIService) => {
    expect(service).toBeTruthy();
  }));
});
