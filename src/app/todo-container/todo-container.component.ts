import { Component, OnInit } from '@angular/core';
import { todos } from './mockTodos';
import { Todo } from '../types/Todo';
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos = todos;
  ngOnInit() {}
  handleComplete(id) {
    const itemIndex: number = this.todos.findIndex(todo => todo.id === id);
    if (itemIndex === -1) {
      throw new Error('Error Removing Item');
    }
    this.todos[itemIndex].completed = !this.todos[itemIndex].completed;
  }
}
