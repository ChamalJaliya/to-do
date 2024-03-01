// src/application/repositories/user-repository.ts
import { User } from '../../domain/entities/user';

export interface UserRepository {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: number): Promise<User | null>;
  update(user: User): Promise<User>;
  delete(id: number): Promise<void>;
}
