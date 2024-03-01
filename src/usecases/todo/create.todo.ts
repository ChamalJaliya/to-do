// src/usecases/todo/create-todo.ts
import { Todo } from '../../domain/entities/todo';
import { TodoRepository } from '../../application/repositories/todo-repository';

interface CreateTodoInput {
  task: string;
  // Add userId here if relating to a user 
}

export class CreateTodo {
  constructor(private readonly todoRepository: TodoRepository) {} 

  async execute(input: CreateTodoInput): Promise<Todo> {
    const newTodo = new Todo(input);  

    // Optional: Additional validation logic for the Todo entity

    const createdTodo = await this.todoRepository.create(newTodo); 
    return createdTodo;
  }
}
