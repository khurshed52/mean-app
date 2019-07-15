import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-chart',
  templateUrl: './ng-chart.component.html',
  styleUrls: ['./ng-chart.component.css']
})
export class NgChartComponent implements OnInit {
  public sleepingHours:string = 'Sleeping Hours';
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2015', '2016', '2017', '2018', '2019'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 70, 80, 81, 56], label: 'Khurshed'}, 
    {data: [80, 90, 55, 65, 86], label: 'Imran'},
    {data: [30, 20, 60, 19, 50], label: 'Shadab'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
