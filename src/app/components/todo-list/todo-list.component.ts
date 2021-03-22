import { Component, OnInit } from '@angular/core';
import {Priority, Todo} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todoList: Todo[] = [
    {title:'first', done: false, priority: Priority.High}, {title:'second', done: false, priority: Priority.High},
    {title:'third', done: false, priority: Priority.Medium}
  ];
  public todosDoneList: Todo[] = [];
  public searchStr =  '';
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
    this.filterTodoList(value);
    this.filterDoneList(value);
  }

  private filterTodoList(value: string){
    this.todoList = this.todoList.filter(
      (todo)=> todo.title != value
    )
  }

  private filterDoneList(value: string){
    this.todosDoneList = this.todosDoneList.filter(
      (todo)=> todo.title != value
    )
  }

  addToDoneList(value: string) {
    const todos = this.todoList.filter(
      (todo)=> todo.title == value
    )
    this.filterTodoList(value);
    todos.forEach( (todo) => {
      todo.done = true;
      this.todosDoneList.push(todo);
    })
  }

  changePriority(value: string) {
    let str = value.split(' ');
    let target = str[1];
    let valueToChange = Priority[str[0]];
    this.todoList.forEach(
      (el) =>{
        if(el.title == target){
          el.priority = valueToChange
        }
      }
    )
    this.todosDoneList.forEach(
      (el) =>{
        if(el.title == target){
          el.priority = valueToChange
        }
      }
    )
  }

}
