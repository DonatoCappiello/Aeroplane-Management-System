/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AeroplaneService } from './aeroplane.service';

describe('AeroplaneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AeroplaneService]
    });
  });

  it('should ...', inject([AeroplaneService], (service: AeroplaneService) => {
    expect(service).toBeTruthy();
  }));
});
