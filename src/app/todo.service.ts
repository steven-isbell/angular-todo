import { Injectable } from '@angular/core';

import { todos } from './mockTodos';
import { Todo } from './types/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() {}
  getTodos(): Todo[] {
    return todos;
  }
}
