import { TestBed } from '@angular/core/testing';

import { RecordService } from './record.service';

describe('RecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: RecordService = TestBed.get(RecordService);
    expect(service).toBeTruthy();
  });
});
