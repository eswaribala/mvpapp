import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { DiamondComponent } from './diamond.component';
import { MatCardModule } from '@angular/material';
import { PhotoService } from '../services/photoservice';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DiamondComponent', () => {
  let component: DiamondComponent;
  let fixture: ComponentFixture<DiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondComponent ],
      imports:[MatTableModule,
        MatPaginatorModule,
        MatSortModule,
      MatCardModule,
      HttpClientTestingModule
      ],
      providers:[PhotoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
