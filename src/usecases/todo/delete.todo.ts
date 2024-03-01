// src/usecases/todo/delete-todo.ts
import { TodoRepository } from '../../application/repositories/todo-repository';

export class DeleteTodo {
  constructor(private readonly todoRepository: TodoRepository) {} 

  async execute(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
