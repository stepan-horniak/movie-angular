import { TestBed } from '@angular/core/testing';

import { MovieData } from './movie.service';

describe('MovieData', () => {
  let service: MovieData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
