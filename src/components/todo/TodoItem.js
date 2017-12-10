import React from 'react';

const TodoItem = (props) => {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={props.todo.isComplete} /> {props.todo.name}
      </label>
    </li>
  );
};

export default TodoItem;