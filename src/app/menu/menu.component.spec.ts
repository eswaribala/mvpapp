import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MenubarModule} from "primeng/menubar";
import { MenuComponent } from './menu.component';
import { MenuService } from '../services/menuservice';
import {RouterTestingModule} from "@angular/router/testing";
describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MenubarModule,
        RouterTestingModule
      ],
      declarations: [ MenuComponent ],
      providers:[MenuService]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
