import React from 'react';
import PropTypes from 'prop-types';
import { partial } from '../../lib/utils';
const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  return (
    <li>
      <label>
        <input type="checkbox" onChange={handleToggle} checked={props.isComplete} /> {props.name}
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