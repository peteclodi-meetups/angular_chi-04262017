import { TestBed, inject } from '@angular/core/testing';

import { CalculationHistoryService } from './calculation-history.service';

describe('CalculationHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationHistoryService]
    });
  });

  it('should ...', inject([CalculationHistoryService], (service: CalculationHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
