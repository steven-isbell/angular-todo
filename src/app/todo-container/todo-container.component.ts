import { Component, OnInit } from '@angular/core';
import todos from './mockTodos';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  ngOnInit() {}
}
