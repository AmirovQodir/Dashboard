import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return  [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }]
  };
  Cart() {
    return [71, 23, 38, 43];
  }

  pieChart() {
    return [
      {
          name: "Chrome",
          y: 62.74,
          drilldown: "Chrome"
      },
      {
          name: "Firefox",
          y: 10.57,
          drilldown: "Firefox"
      },
      {
          name: "Internet Explorer",
          y: 7.23,
          drilldown: "Internet Explorer"
      },
      {
          name: "Safari",
          y: 5.58,
          drilldown: "Safari"
      },
      {
          name: "Edge",
          y: 4.02,
          drilldown: "Edge"
      },
      {
          name: "Opera",
          y: 1.92,
          drilldown: "Opera"
      },
      {
          name: "Other",
          y: 7.62,
          drilldown: null
      }
  ]
  }
}
