import { Component, OnInit } from '@angular/core';
import { Todo } from '../types/Todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todo: Todo = {
    id: 1,
    text: 'Sleep',
    completed: false
  };
  ngOnInit() {}
}
