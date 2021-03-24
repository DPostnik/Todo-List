import {Component, OnInit} from '@angular/core';
import {Notification, Priority, Todo} from '../../shared/interfaces/interfaces';
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
  public notification = Notification.No;

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  updateList(value: string) {
    if(!this.todoService.checkIncludes(value,this.todoList)) {
      const todo: Todo = {
        title: value,
        done: false,
        priority: Priority.Medium
      }
      this.todoList.push(todo);
      this.notification = Notification.Create
    }
    else{
      this.notification = Notification.Error
    }
    setTimeout(() => this.notification = this.notification = Notification.No, 4000);
  }



  removeTodo(value: string){
    this.notification = Notification.Remove
    setTimeout(()=>this.notification = this.notification = Notification.No,4000);
    this.todoList = this.todoService.removeTodo(value, this.todoList);
  }

}
