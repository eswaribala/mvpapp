import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
const PRODUCTS_URL = 'http://localhost:6060/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Minimum Viable Product';
  logoPath = './assets/logo.png';
  users: any;
  user: string;
  searchString = 'L';
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get(PRODUCTS_URL).subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

  public checkUser() {
     console.log(this.user);
     return this.user;
  }
}
