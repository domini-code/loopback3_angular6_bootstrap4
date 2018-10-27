import { TestBed } from '@angular/core/testing';

import { DataApiService } from './data-api.service';

describe('DataApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataApiService = TestBed.get(DataApiService);
    expect(service).toBeTruthy();
  });
});
