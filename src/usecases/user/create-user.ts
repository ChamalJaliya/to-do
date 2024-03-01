import { User } from '../../domain/entities/user';
import { UserRepository } from '../../application/repositories/user-repository';
import * as bcrypt from 'bcrypt'; 

interface CreateUserInput {
  name: string;
  email: string;
  password: string; // Plaintext at this stage
}

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {} 

  async execute(input: CreateUserInput): Promise<User> {
    const saltRounds = 10; // Customize bcrypt's cost factor as needed

    const passwordHash = await bcrypt.hash(input.password, saltRounds);

    const newUser = new User({
      name: input.name,
      email: input.email,
      passwordHash, // Store the hash
    });

    const createdUser = await this.userRepository.create(newUser);
    return createdUser;
  }
}
