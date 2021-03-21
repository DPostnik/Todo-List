import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Priority, Todo} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public priorities: Priority[] = [Priority.Medium,Priority.Low, Priority.High];

  @Input() todo: Todo;
  @Output() onRemoveTodo = new EventEmitter<string>();
  @Output() onDoneTodo = new EventEmitter<string>();
  @Output() onChangePriority = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.priorities = this.priorities.filter(
      (el) => el != this.todo.priority
    )
  }

  removeTodo(target: string) {
    this.onRemoveTodo.emit(target);
  }

  doneTodo(target: string) {
    this.onDoneTodo.emit(target)
  }

  changePriority(event) {
    this.onChangePriority.emit(`${event.target.value} ${this.todo.title}`);
  }
}
