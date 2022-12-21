import { useEffect, useState } from 'react';
import { ToDoList } from '../todo-list';
import { IToDoItem } from '../../types';
import { ItemForm } from '../item-add-form';
import './containers.css';

export function ToDoContainer() {
  const [todos, setTodos] = useState<IToDoItem[]>([]);
  const [todo, setTodo] = useState<IToDoItem>();

  const createItem = (text: string): void => {
    const newItem = { id: todos.length + 1, text, isDone: false };

    setTodos([...todos, newItem]);
  };

  const updateText = (text: string): void => {
    if (todo) {
      const idx = todos.findIndex((el) => el.id === todo.id);
      const prevItem = todos[idx];
      const newItem = { ...prevItem, text };
      const newTodos = [
        ...todos.slice(0, idx),
        newItem,
        ...todos.slice(idx + 1),
      ];

      setTodos(newTodos);
      setTodo(undefined);
    }
  };

  const deleteItem = (id: number): void => {
    const idx = todos.findIndex((el) => el.id === id);
    const newArray = [...todos.slice(0, idx), ...todos.slice(idx + 1)];

    setTodos(newArray);
  };

  const onToggleDone = (id: number): void => {
    const idx = todos.findIndex((el) => el.id === id);
    const prevItem = todos[idx];
    const newItem = { ...prevItem, isDone: !prevItem.isDone };
    const newTodos = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];

    setTodos(newTodos);
  };

  const onToggleEdit = (id: number, text: string): void => {
    const idx = todos.findIndex((el) => el.id === id);
    setTodo(todos[idx]);
  };

  useEffect(() => {
    setTodos([
      {
        id: 1,
        text: 'Create app',
        isDone: true,
      },
      {
        id: 2,
        text: '(not) suicide',
        isDone: false,
      },
      {
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isDone: false,
      },
    ]);
  }, []);

  return (
    <div className='todo-container'>
      <h2 className='todo-header'>To do list</h2>
      <ToDoList
        todos={todos}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
        onToggleEdit={onToggleEdit}
      />
      {todo ? (
        <ItemForm
          textValue={todo.text}
          onSave={updateText}
          buttonText='Save item'
        />
      ) : (
        <ItemForm textValue='' onSave={createItem} buttonText='Add item' />
      )}
    </div>
  );
}
