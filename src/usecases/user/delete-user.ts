// src/usecases/user/delete-user.ts 
import { UserRepository } from '../../application/repositories/user-repository';

export class DeleteUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: number): Promise<void> {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error(`User with id ${userId} not found`); 
    }

    await this.userRepository.delete(userId);
  }
}
