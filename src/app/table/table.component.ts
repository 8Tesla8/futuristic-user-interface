import { Component, Input } from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  public tableData:Car[] = [];

}
