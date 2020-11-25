import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data: any[];
  constructor() { }

  chartOptions = {};

  Highcharts = Highcharts;
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroudColor: null,
        borderWith: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      series: [{
        data: this.data
      }]
    };

    HC_exporting(Highcharts);
    
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300)
  }

}
