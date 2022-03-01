import { TestBed } from '@angular/core/testing';

import { StudyPlansService } from './study-plans.service';

describe('StudyPlansService', () => {
  let service: StudyPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
