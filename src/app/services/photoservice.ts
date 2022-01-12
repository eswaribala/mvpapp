import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PhotoService{

  constructor(private http:HttpClient)
  {

  }

  getAllPhotos():Observable<any>
  {
      return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }



}

