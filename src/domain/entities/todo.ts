export class Todo {
    id: number;
    task: string;
    completed: boolean;
    userId?: number; // Optional field to associate with a User
  
    constructor(data: { task: string, completed?: boolean, userId?: number }) {
      this.id = 0; // Auto-generated by the database
      this.task = data.task;
      this.completed = data.completed || false; // Default to false if not provided
      this.userId = data.userId;
    }
  }
  