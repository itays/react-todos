import React, { Component } from 'react';
import { TodoForm, TodoList } from './components/todo';
import { addTodo, generateId } from './lib/toooHelpers';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: 1, name: 'Learn JSX', isComplete: true },
				{ id: 2, name: 'Build an awesome app', isComplete: false },
				{ id: 3, name: 'Ship it', isComplete: false },
			],
			currentTodo: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
	}
	handleInputChange(e) {
		this.setState({ currentTodo: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		const newId = generateId();
		const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
		const updatedTodo = addTodo(this.state.todos, newTodo);
		this.setState({
			todos: updatedTodo,
			currentTodo: ''
		});
	}

	handleEmptySubmit(e) {
		e.preventDefault();
		this.setState({errorMessage: 'Please supply a todo name'});
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
					<TodoForm currentTodo={this.state.currentTodo} handleInputChange={this.handleInputChange} handleSubmit={submitHandler}/>
					<TodoList todos={this.state.todos}/>
					
				</div>

			</div>
		);
	}
}

export default App;
