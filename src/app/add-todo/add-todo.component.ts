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
  addTodo(text: string): void {
    const { todos }: { todos: Todo[] } = this.todoService;
    const id: number = todos[todos.length - 1].id + 1;
    const newTodo: Todo = {
      id,
      text,
      completed: false
    };

    todos.push(newTodo);
    this.newTodo = {};
  }
  handleKeypress(event: KeyboardEvent, text: string): void {
    if (text && event.key === 'Enter') {
      this.addTodo(text);
    }
  }
}
