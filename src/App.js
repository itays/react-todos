import React, { Component } from 'react';
import { TodoForm, TodoList } from './components/todo';
import { addTodo, generateId, findById, toggleTodo, updateTodo } from './lib/todoHelpers';
import { partial, pipe } from './lib/utils'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		todos: [
			{ id: 1, name: 'Learn JSX', isComplete: true },
			{ id: 2, name: 'Build an awesome app', isComplete: false },
			{ id: 3, name: 'Ship it', isComplete: false },
		],
		currentTodo: ''
	};

	handleInputChange = (e) => {
		this.setState({ currentTodo: e.target.value });
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const newId = generateId();
		const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false };
		const updatedTodo = addTodo(this.state.todos, newTodo);
		this.setState({
			todos: updatedTodo,
			currentTodo: '',
			errorMessage: ''
		});
	}

	handleEmptySubmit = (e) => {
		e.preventDefault();
		this.setState({ errorMessage: 'Please supply a todo name' });
	}

	handleToggle = (id) => {
		const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
		const updatedTodos = getUpdatedTodos(id, this.state.todos);
		this.setState({ todos: updatedTodos });
	}
	render() {
		const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2 className="App-title">React Todos</h2>
				</header>
				<div className="todo-app">
					{this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
					<TodoForm currentTodo={this.state.currentTodo} handleInputChange={this.handleInputChange} handleSubmit={submitHandler} />
					<TodoList handleToggle={this.handleToggle} todos={this.state.todos} />

				</div>

			</div>
		);
	}
}

export default App;
