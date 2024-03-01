export class User {
    id: number;
    name: string | null; // Optional name field
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date; 
  
    constructor(data: { name?: string, email: string, passwordHash: string }) {
      this.id = 0; 
      this.name = data.name || null;
      this.email = data.email;
      this.passwordHash = data.passwordHash;
      this.createdAt = new Date();
      this.updatedAt = new Date(); 
    }
  }
  