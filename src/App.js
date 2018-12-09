import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
import TodoList from './TodoList'
import logo from './logo.svg';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            inputVal: '',
            isEdit: false,
            editPos: null
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    addTodo = function(input) {
        var joined = this.state.todo.concat(input);
        this.setState({
            todo: joined
        });
    }
    deleteTodo(i) {
        this.setState({
            todo: this.state.todo.filter((el, pos) => pos !== i)
        })
    }
    editTodo(i) {
        console.log(this.state.todo);
        const tempVal = this.state.todo[i];
        this.setState({
            inputVal: tempVal,
            isEdit: true,
            editPos: i
        });
    }
    updateTodo(i, val) {
        this.setState({
            todo: this.state.todo.map((el, pos) => {
                if (pos == i) el = val
                return el;
            }),
            inputVal: '',
            isEdit: false,
            editPos: null
        })

    }


    /*<div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2> Welcome to React</h2>
    </div>*/


    render() {

        const { todo } = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2> Welcome to React</h2>
                </div>
                <Todo getInput = { this.addTodo }  updateTodo = { this.updateTodo } {...this.state }/> 
                <TodoList data = { todo }  editTodo = { this.editTodo } deleteTodo = { this.deleteTodo } /> 
            </div>
        );
    }
}

export default App;