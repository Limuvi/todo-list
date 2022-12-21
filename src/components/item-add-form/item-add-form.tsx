import { FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import './item-add-form.css';

export function ItemForm({
  onSave,
  textValue,
  buttonText,
}: {
  onSave: (text: string) => void;
  textValue: string;
  buttonText: string;
}) {
  const [text, setText] = useState<string>(textValue);  

  useEffect(() => setText(textValue), [textValue]);

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    onSave(text);
    setText('');
  };

  const onTextChange = (e: FormEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  return (
    <form className='item-add-form' onSubmit={onSubmit}>
      <input
        type='text'
        className='input-text'
        onChange={onTextChange}
        placeholder='What needs to be done'
        value={text}
      />
      {text.trim() ? (
        <button className='button button-success text-white'>
          {buttonText}
        </button>
      ) : (
        <button disabled className='button button-success disabled text-white'>
          {buttonText}
        </button>
      )}
    </form>
  );
}
