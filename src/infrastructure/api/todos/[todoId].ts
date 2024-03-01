// pages/api/todos/[todoId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/react'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const session = await unstable_getServerSession(req, res); 
  if (!session || !session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const todoId = req.query.todoId as string; // Ensure proper type handling

  switch (req.method) {
    case 'GET':
      return handleGetTodo(todoId, res);
    case 'PUT':
      return handleUpdateTodo(todoId, req.body, res);
    case 'DELETE':
      return handleDeleteTodo(todoId, res);
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function handleGetTodo(todoId: string, res: NextApiResponse) {
    try {
      const todo = await getTodoById(Number(todoId));  // Convert todoId to number if needed
  
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
  
      res.status(200).json(todo);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  
  async function handleUpdateTodo(todoId: string, data: any, res: NextApiResponse) {
    try {
      // Add input validation for 'data' 
  
      const updatedTodo = await updateTodo({ id: Number(todoId), ...data });  
  
      if (!updatedTodo) { 
        return res.status(404).json({ message: "Todo not found" });
      }
  
      res.status(200).json(updatedTodo);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  
  async function handleDeleteTodo(todoId: string, res: NextApiResponse) {
    try {
      await deleteTodo(Number(todoId));
      res.status(204).end(); // No Content
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: "Something went wrong" });
    }
  