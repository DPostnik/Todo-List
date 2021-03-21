import { Component, OnInit } from '@angular/core';
import {Todo} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todoList: Todo[] = [
    {title:'first', done: false}, {title:'second', done: false}, {title:'third', done: false}
  ];
  public todosDoneList: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  updateList(value: string) {
    const todo: Todo = {
      title: value,
      done: false
    }
    this.todoList.push(todo);
  }

  removeTodo(value: string) {
    this.updateTodoList(value);
    this.updateDoneList(value);
  }

  private updateTodoList(value: string){
    this.todoList = this.todoList.filter(
      (todo)=> todo.title != value
    )
  }

  private updateDoneList(value: string){
    this.todosDoneList = this.todosDoneList.filter(
      (todo)=> todo.title != value
    )
  }

  addToDoneList(value: string) {
    const todos = this.todoList.filter(
      (todo)=> todo.title == value
    )
    this.updateTodoList(value);
    todos.forEach( (todo) => {
      todo.done = true;
      this.todosDoneList.push(todo);
    })
  }
}
