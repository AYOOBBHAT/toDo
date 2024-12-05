import React from 'react';
import { Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';
import { formatDateTime } from '../utils/dateUtils';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm mb-2 group hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <div className="flex-1">
          <p className={`text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </p>
          <p className="text-sm text-gray-500">
            Created: {formatDateTime(todo.createdAt)}
          </p>
        </div>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
        aria-label="Delete todo"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};