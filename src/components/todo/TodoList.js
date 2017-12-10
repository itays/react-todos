import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	const todos = props.todos.map(todo => {
		return (
			<TodoItem {...todo}/>
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

export default TodoList;