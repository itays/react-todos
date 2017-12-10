import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	const todos = props.todos.map(todo => {
		return (
			<TodoItem key={todo.id} {...todo}/>
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
	todos: PropTypes.array.isRequired
}

export default TodoList;