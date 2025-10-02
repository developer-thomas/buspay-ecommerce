import { TestBed } from '@angular/core/testing';

import { ProductFiltersService } from './product-filters.service';

describe('ProductFiltersService', () => {
  let service: ProductFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
