import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {TitleComponent} from '../title/title.component';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {


  orgName = 'GRD Jewellery';
  city: string;
  @ViewChild(TitleComponent, {static: false}) titleComponent: TitleComponent;
  @ViewChild(ChildComponent, {static: false}) childComponent: ChildComponent;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.titleComponent.customerName);
    console.log(this.childComponent.deposit(Math.random() * 1000));
  }

  public invokeTitleComponent(): any {
      return this.titleComponent.customerName;
  }
  public invokeChildComponent(): any {
      return this.childComponent.deposit(Math.random() * 1000);
  }



  convert() {
    this.city = this.city.toUpperCase();
  }

}
