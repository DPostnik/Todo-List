import {Injectable} from '@angular/core';
import {Priority, Todo} from '../interfaces/interfaces';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TodoService{

  getUndoneTodoList(todos: Todo[]){
    return todos.filter(
      todo => todo.done === false
    )
  }

  getDoneTodoList(todos: Todo[]){
    return todos.filter(
      todo => todo.done === true
    )
  }

  removeTodo(value: string, todoList: Todo[]) {
    return  todoList.filter(
      (todo)=> todo.title != value)
  }

  updateState(value: string, todoList: Todo[]) {
    let values = value.split(' ');
    todoList.forEach(
      (el) =>{
        if(el.title == values[0]){
          el.done = values[1] == 'true';
        }
      }
    )
  }

  changePriority(value: string,todoList: Todo[]) {
    let str = value.split(' ');
    let target = str[1];
    let valueToChange = Priority[str[0]];
    todoList.forEach(
      (el) =>{
        if(el.title == target){
          el.priority = valueToChange
        }
      }
    )
  }

  checkIncludes(value: string, todoList: Todo[]) {
    let bool = false;
    todoList.forEach(
      (el)=> {
        if (el.title == value)
          bool = true;
          }
    )
    return bool;
  }

}
