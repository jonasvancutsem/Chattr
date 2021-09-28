import { TestBed } from '@angular/core/testing';

import { ChattrDataService } from './chattr-data.service';

describe('ChattrDataService', () => {
  let service: ChattrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChattrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
