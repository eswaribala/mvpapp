import {LoginComponent} from './login.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
class MockAuthService {

    constructor() {
        sessionStorage.setItem('LoggedInUser', 'true');
    }
    getToken() {
        return sessionStorage.getItem('LoggedInUser');
      }
    isLoggednIn() {
        return this.getToken() !== null;
      }
}

describe('Component: Login', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;


    let service: MockAuthService;

    beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(MockAuthService);
  });

    afterEach(() => {
    service = null;
    component = null;
  });


    xit('needsLogin returns true when the user has not been authenticated', () => {
   // service.isLogIn = false;
    expect(component.needsLogin()).toBeTruthy();
  });

    xit('needsLogin returns false when the user has been authenticated', () => {
    // service.isLogIn = true;
    expect(component.needsLogin()).toBeFalsy();
  });
});
