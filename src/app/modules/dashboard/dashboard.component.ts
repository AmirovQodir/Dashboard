import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: any[] = [];
  cards: any[] = [];
  pieChart: any[] = [];
  constructor( private dashboardServise: DashboardService) {
    this.bigChart = this.dashboardServise.bigChart();
    this.cards = this.dashboardServise.Cart();
    this.pieChart = this.dashboardServise.pieChart();
   }
  ngOnInit(): void {
  }

}
