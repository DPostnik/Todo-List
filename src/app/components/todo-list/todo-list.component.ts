import {Component, OnDestroy, OnInit} from '@angular/core';
import {Notification, Priority, Todo} from '../../shared/interfaces/interfaces';
import {TodoService} from '../../shared/services/todo.service';
import {TodoContentService} from '../../shared/services/todo-content.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todoList: Todo[] = [];
  public searchStr =  '';
  public priorityFilter = Priority.All;
  public notification = Notification.No;
  public loading = false;

  constructor(public todoService: TodoService,
              private content: TodoContentService) { }

  ngOnInit(): void {
    this.todoList = this.content.getContent();
    if(!this.todoList){
      this.todoList = [
        {
          title: 'first',
          priority: Priority.Medium,
          done: true
        },
        {
          title: 'second',
          priority: Priority.Low,
          done: false
        },
        {
          title: 'main',
          priority: Priority.High,
          done: false
        },
      ]
    }
  }

  ngOnDestroy(): void {
    this.content.saveContent(this.todoList);
  }

  updateList(value: string) {
    if(!this.todoService.checkIncludes(value,this.todoList)) {
      this.loading = true;
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
    setTimeout(() =>
    {
      this.notification = this.notification = Notification.No;
      this.loading = false;
    } , 4000);
  }

  removeTodo(value: string){
    this.notification = Notification.Remove
    setTimeout(()=>this.notification = this.notification = Notification.No,4000);
    this.todoList = this.todoService.removeTodo(value, this.todoList);
  }

  saveData() {
    this.content.saveContent(this.todoList);
  }
}
