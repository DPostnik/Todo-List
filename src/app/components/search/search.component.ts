import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() onChangeSearchStr = new EventEmitter<string>();

  searchStr = '';

  constructor() { }

  ngOnInit(): void {
  }

  SearchStr($event: MouseEvent) {
    this.onChangeSearchStr.emit(this.searchStr);
  }
}
