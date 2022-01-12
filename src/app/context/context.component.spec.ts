import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ChartModule} from "primeng/chart";
import { ContextComponent } from './context.component';
import { CountryService } from '../services/country.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
describe('ContextComponent', () => {
  let component: ContextComponent;
  let fixture: ComponentFixture<ContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ChartModule,
        HttpClientTestingModule 
      ],
      declarations: [ ContextComponent ],
      providers:[CountryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
