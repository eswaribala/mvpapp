import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output('capitalize')
  update = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  updateData() {
    this.update.emit();
  }

  public deposit(amount: number) {
    // write business logic
    return 'Amount Deposited';
  }


}
