import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output() keywordChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  search1($event) {
    this.invalue = this.keyword;
    this.isHighLight = !this.isHighLight;
    this.fontSiz = this.fontSiz + 2;
  }

  doSearch($event) {
    this.keywordChange.emit(this.keyword);
  }
}
