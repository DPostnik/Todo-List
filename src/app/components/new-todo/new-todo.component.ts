import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @Output() onAddNewTodo = new EventEmitter<string>();
  public title: string ="";

  constructor() { }

  ngOnInit(): void {
  }

  onCreate($event) {
    if(this.title.trim())
    this.onAddNewTodo.emit(this.title);
    this.title = "";
  }

}
