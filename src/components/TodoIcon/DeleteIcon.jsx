import React from 'react';
import { ToDoIcon } from './ToDoIcon';

function DeleteIcon({ onDelete }) {
  return (
    <ToDoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
