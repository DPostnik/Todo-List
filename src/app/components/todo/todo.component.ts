import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Priority, Todo} from "../../shared/interfaces/interfaces";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations:[
    trigger(
      'removeTodo',[
        state('start',style({ opacity: 1 ,transform: 'translateX(0)'  })),
        state('end', style(
          { opacity: 0, transform: 'translateX(700px)', backgroundColor: '#ff0000', width:'200px'})),
        transition('start => end',[
          animate(1000),
        ]),
        transition('end => start',[
          animate(500)
        ])
      ])
  ]
})
export class TodoComponent implements OnInit {
  public removed = false;
  public priorities: Priority[] = [Priority.Medium,Priority.Low, Priority.High];
  @Input() todo: Todo;
  @Output() onRemoveTodo = new EventEmitter<string>();
  @Output() onDoneTodo = new EventEmitter<string>();
  @Output() onChangePriority = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.priorities = this.priorities.filter(
      (el) => el != this.todo.priority
    )
  }

  removeTodo(target: string) {
    this.removed = !this.removed;
    setTimeout(()=> {
      this.onRemoveTodo.emit(target);
      },1000)
  }

  doneTodo(target: string) {
    this.onDoneTodo.emit(`${target} ${!this.todo.done}`);
  }

  changePriority(event) {
    this.onChangePriority.emit(`${event.target.value} ${this.todo.title}`);
  }

}
