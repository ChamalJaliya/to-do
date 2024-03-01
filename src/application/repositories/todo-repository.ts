
import { Todo } from '../../domain/entities/todo';

export interface TodoRepository {
  create(todo: Todo): Promise<Todo>;
  findAll(): Promise<Todo[]>;
  findById(id: number): Promise<Todo | null>;
  findByUserId(userId: number): Promise<Todo[]>; 
  update(todo: Todo): Promise<Todo>;
  delete(id: number): Promise<void>;
}
