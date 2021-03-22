import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "../interfaces/interfaces";

@Pipe({
  name:"searchName"
})
export class SearchPipe implements PipeTransform{
  transform(todos: Todo[], searchStr = ''): Todo[] {
    if(!searchStr.trim()){
      return  todos;
    }
    return todos.filter( (todo) => todo.title.toLowerCase().includes(searchStr.toLowerCase()) );
  }

}
