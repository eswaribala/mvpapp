import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../services/photoservice';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.css']
})
export class DiamondComponent implements OnInit {

  public _data: any;
  constructor(private photoService: PhotoService) {

  }

  ngOnInit() {
    this.photoService.getAllPhotos().subscribe(response => {
      // console.log(response);
      this._data = response;
      console.log(this._data);
    });


  }

}
