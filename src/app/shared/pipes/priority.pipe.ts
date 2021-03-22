import {Pipe, PipeTransform} from "@angular/core";
import {Priority, Todo} from "../interfaces/interfaces";

@Pipe({
    name: 'priority'
  })
export class PriorityPipe implements PipeTransform{
  transform(todos: Todo[], priority: Priority): Todo[] {
    if(priority == Priority.All){
      return todos;
    }
    return todos.filter( todo => todo.priority == priority);
  }

}
