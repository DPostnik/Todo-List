import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "../interfaces/interfaces";

@Pipe({
    name: 'priority'
  })
export class PriorityPipe implements PipeTransform{
  transform(todos: Todo[], priority: PriorityPipe): Todo[] {
    if(!priority){
      return todos;
    }
    // return todos.filter( todo => todo.)
  }

}
