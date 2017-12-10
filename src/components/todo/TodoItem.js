import React from 'react';
import PropTypes from 'prop-types';
const TodoItem = (props) => {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={props.isComplete} /> {props.name}
      </label>
    </li>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}

export default TodoItem;