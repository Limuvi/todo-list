import { IToDoItem } from '../../types';
import { TodoListItem } from '../todo-list-item';
import './todo-list.css';

export function ToDoList({
  todos,
  onDeleted,
  onToggleDone,
  onToggleEdit,
}: {
  todos: IToDoItem[];
  onDeleted: (id: number) => void;
  onToggleDone: (id: number) => void;
  onToggleEdit: (id: number, text: string) => void;
}) {
  const elements = todos.map((todo) => {
    const { id, text } = todo;
    return (
      <li key={todo.id} className=''>
        <TodoListItem
          todo={todo}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleEdit={() => onToggleEdit(id, text)}
        />
      </li>
    );
  });

  return <ul className='todo-list'>{elements}</ul>;
  // return <ul className='list-group todo-list'>{elements}</ul>;
}
