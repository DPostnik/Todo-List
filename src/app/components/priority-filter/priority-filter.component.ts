import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Priority} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-priority-filter',
  templateUrl: './priority-filter.component.html',
  styleUrls: ['./priority-filter.component.scss']
})
export class PriorityFilterComponent implements OnInit {

  @Output() onChangeFilterPriority = new EventEmitter<Priority>();
  public priorities: Priority[] = [ Priority.All ,Priority.Medium,Priority.Low, Priority.High];
  constructor() { }

  ngOnInit(): void {
  }

  changePriority(event) {
    this.onChangeFilterPriority.emit(event.target.value);
  }
}
