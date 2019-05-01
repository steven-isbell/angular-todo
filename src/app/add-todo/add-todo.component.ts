import { Component, OnInit } from '@angular/core';
import { Todo } from '../types/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  newTodo: Todo | object = {};
  todos: Todo[];
  constructor(private todoService: TodoService) {}
  ngOnInit() {}
  addTodo(text: string) {
    const { todos } = this.todoService;
    const id = todos[todos.length - 1].id + 1;
    const newTodo = {
      id,
      text,
      completed: false
    };
    todos.push(newTodo);
  }
}
