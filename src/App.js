import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TodoForm, TodoList, Footer } from './components/todo';
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos } from './lib/todoHelpers';
import { partial, pipe } from './lib/utils'; 
import logo from './logo.svg';
import './App.css';
import { loadTodos, createTodo, saveTodo, destroyTodo } from './lib/todoService';

class App extends Component {
	state = {
		todos: [],
		currentTodo: ''
	};

	componentDidMount() {
		loadTodos().then(todos => this.setState({todos}));
	}

	handleRemove = (id, e) => {
		e.preventDefault();
		const updatedTodos = removeTodo(this.state.todos, id);
		this.setState({todos: updatedTodos});
		destroyTodo(id).then(() => this.showTempMessage('Todo Removed'));
	}

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
		createTodo(newTodo).then(() => this.showTempMessage('Todo added'));
	}

	showTempMessage = (msg) => {
		this.setState({message: msg});
		setTimeout(() => this.setState({message: ''}), 2500);
	}

	handleEmptySubmit = (e) => {
		e.preventDefault();
		this.setState({ errorMessage: 'Please supply a todo name' });
	}

	handleToggle = (id) => {
		const getToggledTodo = pipe(findById, toggleTodo);
		const updated = getToggledTodo(id, this.state.todos);
		const getUpdatedTodos = partial(updateTodo, this.state.todos);
		const updatedTodos = getUpdatedTodos(updated);
		this.setState({ todos: updatedTodos });
		saveTodo(updated).then(() => this.showTempMessage('Todo updated'));
	}
	render() {
		const displayTodos = filterTodos(this.state.todos, this.context.route);
		const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2 className="App-title">React Todos</h2>
				</header>
				<div className="todo-app">
					{this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
					{this.state.message && <span className="success">{this.state.message}</span>}
					<TodoForm currentTodo={this.state.currentTodo} handleInputChange={this.handleInputChange} handleSubmit={submitHandler} />
					<TodoList 
						handleToggle={this.handleToggle} 
						todos={displayTodos} 
						handleRemove={this.handleRemove}
					/>
					<Footer />
				</div>

			</div>
		);
	}
}

App.contextTypes = {
	route: PropTypes.string
}

export default App;
