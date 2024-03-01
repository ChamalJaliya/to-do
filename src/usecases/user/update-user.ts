// src/usecases/user/update-user.ts
import { User } from '../../domain/entities/user';
import { UserRepository } from '../../application/repositories/user-repository';

interface UpdateUserInput {
  id: number;
  name?: string; 
  // Add other editable fields as needed (be careful with password updates!)
}

export class UpdateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: UpdateUserInput): Promise<User> {
    const existingUser = await this.userRepository.findById(input.id);

    if (!existingUser) {
      throw new Error(`User with id ${input.id} not found`);
    }

    // Update relevant properties
    if (input.name) existingUser.name = input.name;
    // ... update other fields similarly

    existingUser.updatedAt = new Date(); // Update the 'updatedAt' timestamp

    const updatedUser = await this.userRepository.update(existingUser);
    return updatedUser;
  }
}
