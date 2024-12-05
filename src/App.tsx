import React, { useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { Todo } from './types/todo';
import { ClipboardList } from 'lucide-react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      createdAt: new Date(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
          </div>
          
          <TodoInput onAdd={addTodo} />

          <div className="space-y-2">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500 py-6">
                No todos yet. Add one to get started!
              </p>
            ) : (
              todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={deleteTodo}
                  onToggle={toggleTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;