import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	const todos = props.todos.map(todo => {
		return (
			<TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo} handleRemove={props.handleRemove}/>
		);
	});
	return (
		<div className="todo-list">
			<ul>
				{todos}
			</ul>
		</div>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	handleToggle: PropTypes.func,
	handleRemove: PropTypes.func
}

export default TodoList;