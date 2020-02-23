import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = '';
  invalue = '';
  isHighLight = false;
  fontSiz = 12;

  constructor() { }

  ngOnInit(): void {
  }

  search1($event) {
    this.invalue = this.keyword;
    this.isHighLight = !this.isHighLight;
    this.fontSiz = this.fontSiz + 2;
  }
}
