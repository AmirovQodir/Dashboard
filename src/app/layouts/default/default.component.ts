import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }
  sideBarOpen = true;
  ngOnInit(): void {
  }

  sideBarToggler(evn: Event) {
    this.sideBarOpen = !this.sideBarOpen
  }
}
