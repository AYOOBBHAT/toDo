// Interface for todos as they are stored in memory
export interface Todo {
  id: string;
  text: string;
  createdAt: Date;
  completed: boolean;
}

// Interface for todos as they are stored in localStorage
export interface StoredTodo {
  id: string;
  text: string;
  createdAt: string; // ISO date string
  completed: boolean;
}