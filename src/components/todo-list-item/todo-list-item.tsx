import { useState } from 'react';
import { IToDoItem } from '../../types';
import './todo-item.css';

export function TodoListItem({
  todo: { text, isDone },
  onDeleted,
  onToggleDone,
  onToggleEdit,
}: {
  todo: IToDoItem;
  onDeleted: () => void;
  onToggleDone: () => void;
  onToggleEdit: () => void;
}) {
  // const [isUpdate, setIsUpdate] = useState<boolean>(false);

  return (
    <div className={`todo-list-item ${isDone ? 'done' : ''}`}>
      {/* {isUpdate ? (
        <input className='input-text' type='text' name='text' value={text} />
      ) : (
        <span className='todo-list-item-text' onClick={onToggleDone}>
          {text}
        </span>
      )}

      <button
        type='button'
        className={`button text-white ${
          isUpdate ? 'button-success' : 'button-warning'
        }`}
        onClick={() => {
          setIsUpdate(!isUpdate);
        }}
      >
        <i className='material-icons'>{isUpdate ? 'done' : 'edit'}</i>
      </button> */}
      <span className='todo-list-item-text' onClick={onToggleDone}>
        {text}
      </span>

      <button
        type='button'
        className={'button text-white button-warning'}
        onClick={onToggleEdit}
      >
        <i className='material-icons'>edit</i>
      </button>

      <button
        type='button'
        className='button button-danger text-white'
        onClick={onDeleted}
      >
        <i className='material-icons'>delete</i>
      </button>
    </div>
  );
}
