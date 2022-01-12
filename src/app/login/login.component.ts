import {Component, NgZone, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import {User} from "../models/user";
import {UserService} from "../services/userservice";
import {AuthService} from "../services/authservice";
//import * as dbconfig from 'config';
@Component({
  selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css']

  })

//Template driven form
export class LoginComponent {
  model = new User('admin','admin@123');
  public status:boolean=true;
  submitted = false;

  constructor(private zone: NgZone,private router:Router,private userService:UserService,private authService:AuthService,private myRoute:Router)
  {
           
  }
  login(event:Event) {
    event.preventDefault();
    this.submitted = true;
    console.log(this.model);
    this.userService.getBOAUser(this.model.userName).subscribe(response=>
    {
      console.log(response);
      this.authService.sendToken(response.email);
      this.status=false;
      this.myRoute.navigate(["/Menu"]);
    }

    )
  }

  newUser() {
    this.model = new User('','');
  }

  //unit testing
  public needsLogin() {
    return !this.authService.isLoggednIn;
  }

}

/*
reactive form
private userName:FormControl;
  private password:FormControl;
  private loginGroup:FormGroup;

  constructor(private formBuilder:FormBuilder)
  {
     this.userName=new FormControl('',[Validators.required]);
     this.password=new FormControl('',[Validators.required]);
     this.loginGroup=formBuilder.group({
       userName:this.userName,
       password:this.password
     })
  }

  login()
  {
    console.log(this.loginGroup.value);
  }

 */

