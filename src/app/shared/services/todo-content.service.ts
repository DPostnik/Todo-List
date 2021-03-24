import {Injectable} from '@angular/core';
import {Todo} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoContentService{

  saveContent(todo: Todo[]): void{
    if(todo)
      localStorage.setItem('todos', JSON.stringify(todo));
  }

  getContent(): Todo[]{
    return JSON.parse(localStorage.getItem('todos'));
  }
}
