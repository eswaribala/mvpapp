import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspiremvplibComponent } from './aspiremvplib.component';

describe('AspiremvplibComponent', () => {
  let component: AspiremvplibComponent;
  let fixture: ComponentFixture<AspiremvplibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspiremvplibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspiremvplibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
