import { TestBed } from '@angular/core/testing';

import { AspiremvplibService } from './aspiremvplib.service';

describe('AspiremvplibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AspiremvplibService = TestBed.get(AspiremvplibService);
    expect(service).toBeTruthy();
  });
});
