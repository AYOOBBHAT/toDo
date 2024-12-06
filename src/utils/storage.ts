import { Todo, StoredTodo } from '../types/todo';

export const STORAGE_KEY = 'todos';

export const loadTodos = (): Todo[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const storedTodos = JSON.parse(stored) as StoredTodo[];
    // Convert ISO date strings back to Date objects
    return storedTodos.map((todo) => ({
      ...todo,
      createdAt: new Date(todo.createdAt)
    }));
  } catch (error) {
    console.error('Error loading todos:', error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    // Convert Date objects to ISO strings before saving
    const todosToSave: StoredTodo[] = todos.map(todo => ({
      ...todo,
      createdAt: todo.createdAt.toISOString()
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todosToSave));
  } catch (error) {
    console.error('Error saving todos:', error);
  }
};