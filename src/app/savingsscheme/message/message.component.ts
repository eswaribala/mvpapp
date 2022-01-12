import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  title = 'GRD Jewellery, T.Nagar, Chennai';
  @Input() query: string;
  @Input() answer: string;
  constructor() { }

  ngOnInit() {
  }

}
