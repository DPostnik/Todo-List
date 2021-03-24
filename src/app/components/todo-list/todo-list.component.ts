import {Component, OnInit} from '@angular/core';


import {Priority, Todo} from "../../shared/interfaces/interfaces";
import {TodoService} from '../../shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todoList: Todo[] = [
    {title:'first', done: false, priority: Priority.High}, {title:'second', done: false, priority: Priority.High},
    {title:'third', done: true, priority: Priority.Medium}
  ];
  public searchStr =  '';
  public priorityFilter = Priority.All;

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  updateList(value: string) {
    const todo: Todo = {
      title: value,
      done: false,
      priority: Priority.Medium
    }
    this.todoList.push(todo);
  }



  removeTodo(value: string){
    this.todoList = this.todoService.removeTodo(value, this.todoList);
  }

}
