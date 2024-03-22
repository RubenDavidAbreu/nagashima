import { TestBed } from '@angular/core/testing';

import { DetailsBoxService } from './details-box.service';

describe('DetailsBoxService', () => {
  let service: DetailsBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
