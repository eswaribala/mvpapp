import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsschemeComponent } from './savingsscheme.component';
import { ParentComponent } from './parent/parent.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import { ChildComponent } from './child/child.component';
import { TitleComponent } from './title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SavingsschemeComponent', () => {
  let component: SavingsschemeComponent;
  let fixture: ComponentFixture<SavingsschemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsschemeComponent,ParentComponent,ChildComponent,TitleComponent],
      imports:[
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
       ReactiveFormsModule,
       BrowserAnimationsModule
  
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
