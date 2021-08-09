import { Component } from '@angular/core';
import { Car } from './models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tableData: Car[] =[];

  constructor() {
    this.setTableData();    
  }

  public setTableData():void{
    this.tableData = [
      {
        company: 'skoda',
        model: 'vison-e',
        year: 2016, 
        gear:2,
        speed: 58,
      },
      {
        company: 'honda',
        model: 'civic',
        year: 2016, 
        gear:2,
        speed: 84,
      },
      {
        company: 'chevrolet',
        model: 'camaro',
        year: 2015, 
        gear:2,
        speed: 111,
      }
    ];

  }
}
