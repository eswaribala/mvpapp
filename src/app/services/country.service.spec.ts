import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';


import { CountryService } from './country.service';
let service: CountryService;
let originalTimeout;
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
describe('CountryService', () => {

  beforeEach(() => TestBed.configureTestingModule({

    imports: [
      HttpClientTestingModule,
    ],
    providers: [CountryService]
  }));
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
});

  afterEach(function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

  it('should be created', () => {
   service = TestBed.get(CountryService);

   expect(service).toBeTruthy();
  });


  it('#getObservableValue should return value from observable',
  (done: DoneFn) => {

    service = TestBed.get(CountryService);
    service.getCountries().subscribe(value => {
      expect(value.length).toBeGreaterThan(1);
      done();
    });
  });


});
