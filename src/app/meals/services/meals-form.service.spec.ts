import { TestBed, inject } from '@angular/core/testing';

import { MealsFormService } from './meals-form.service';

describe('MealsFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealsFormService]
    });
  });

  it('should be created', inject([MealsFormService], (service: MealsFormService) => {
    expect(service).toBeTruthy();
  }));
});
