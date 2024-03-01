// src/usecases/user/get-user-profile.ts
import { User } from '../../domain/entities/user';
import { UserRepository } from '../../application/repositories/user-repository';

export class GetUserProfile {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: number): Promise<User | null> {
    const user = await this.userRepository.findById(userId);
    return user;
  }
}
