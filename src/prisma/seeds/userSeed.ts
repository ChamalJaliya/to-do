import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function userSeed() {
  const password = 'test1234'; 
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({ 
    data: {
      name: 'test',
      email: 'test@gmail.com',
      password: hashedPassword,
    },
  });
}

export default userSeed;