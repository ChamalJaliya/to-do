// src/usecases/todo/read-todos.ts
import { Todo } from '../../domain/entities/todo';
import { TodoRepository } from '../../application/repositories/todo-repository';

export class ReadTodos {
  constructor(private readonly todoRepository: TodoRepository) {} 

  async execute(): Promise<Todo[]> {
    const todos = await this.todoRepository.findAll();
    return todos;
  }
}
