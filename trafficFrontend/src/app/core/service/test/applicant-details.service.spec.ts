import { TestBed } from '@angular/core/testing';

import { ApplicantDetailsService } from '../applicant-details.service';

describe('ApplicantDetailsService', () => {
  let service: ApplicantDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
