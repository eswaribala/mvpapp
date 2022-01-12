import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import { ParentComponent } from './parent.component';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from '../title/title.component';
import { ChildComponent } from '../child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  const childComponent = jasmine.createSpyObj('ChildComponent', ['deposit']); 
  const titleComponent = jasmine.createSpyObj('TitleComponent',['updateCustomerName']); 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent,ChildComponent,TitleComponent],
      imports:[
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
     BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return customer name ', () => {
    //spy object creation
    expect(titleComponent).not.toBeNull();
    //parent component calls title component method or property 
    expect(component.invokeTitleComponent()).toContain("GRD");
   
  });

  it('should return deposit status ', () => {
    //spy object creation
    expect(titleComponent).not.toBeNull();
    expect(component.invokeChildComponent()).toContain("Amount");


  });

});
