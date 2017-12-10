import React, { Component } from 'react';
import { TodoForm, TodoList } from './components/todo';

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
	}
	handleInputChange(e) {
		this.setState({ currentTodo: e.target.value });
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2 className="App-title">React Todos</h2>
				</header>
				<div className="todo-app">
					<TodoForm currentTodo={this.state.currentTodo} handleInputChange={this.handleInputChange} />
					<TodoList todos={this.state.todos}/>
					
				</div>

			</div>
		);
	}
}

export default App;
