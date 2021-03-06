import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./shared/pipes/search.pipe";
import { SearchComponent } from './components/search/search.component';
import {PriorityPipe} from "./shared/pipes/priority.pipe";
import { PriorityFilterComponent } from './components/priority-filter/priority-filter.component';
import { NotificatorComponent } from './components/notificator/notificator.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    NewTodoComponent,
    SearchPipe,
    SearchComponent,
    PriorityPipe,
    PriorityFilterComponent,
    NotificatorComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
