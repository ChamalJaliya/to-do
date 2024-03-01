// src/usecases/todo/update-todo.ts
import { Todo } from '../../domain/entities/todo';
import { TodoRepository } from '../../application/repositories/todo-repository';

interface UpdateTodoInput {
  id: number;
  task?: string;
  completed?: boolean;
}

export class UpdateTodo {
  constructor(private readonly todoRepository: TodoRepository) {} 

  async execute(input: UpdateTodoInput): Promise<Todo> {
    const existingTodo = await this.todoRepository.findById(input.id);

    // Ensure todo exists before updating
    if (!existingTodo) {
      throw new Error(`Todo with id ${input.id} not found`); // Or handle as needed
    } 

    // Conditional Update Logic
    if (input.task) existingTodo.task = input.task;
    if (input.completed !== undefined) existingTodo.completed = input.completed; 

    const updatedTodo = await this.todoRepository.update(existingTodo);
    return updatedTodo;
  }
}
