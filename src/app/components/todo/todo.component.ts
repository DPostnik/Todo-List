import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() onRemoveTodo = new EventEmitter<string>();
  @Output() onDoneTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(target: string) {
    this.onRemoveTodo.emit(target);
  }

  doneTodo(target: string) {
    this.onDoneTodo.emit(target)
  }
}
