import { Component, OnInit } from '@angular/core';
import { Todo } from '../types/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  newTodo: Todo | object = {};
  ngOnInit() {}
  addTodo(text: string) {}
}
