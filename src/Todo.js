import React, {Component} from 'react';

class Todo extends Component{
	constructor(props){
		super(props);
		this.state = {
            title : "Todo"
        }
		this.setInput = this.setInput.bind(this);
		console.log("1: constructor... ");
	}
	componentWillMount(){
		console.log("2: componentWillMount... at Once");
	}
	componentDidUpdate(){
		console.log("9: componentDidUpdate...");
		this.todoInput.value = this.props.inputVal;		
		this.todoInput.focus();
	}
	componentDidMount(){
		console.log("4: componentDidMount... at Once");
				this.todoInput.value = this.props.inputVal;	
	}
	componentWillReceiveProps(nextProps){	
				console.log("5: componentDidMount...");
	}
	shouldComponentUpdate(nextProps, nextState){
			console.log("6: shouldComponentUpdate...");
		    return true; //this is the missing piece
	}
	componentWillUpdate(nextProps, nextState){
				console.log("7: componentWillUpdate...");
	}
	componentDidCatch(errorString, errorInfo){
				console.log("0: componentDidCatch...");
	}
	componentWillUnmount(){
				console.log("0: componentWillUnmount... at Once");
	}
	setInput = function(e){
		console.log(this.todoInput.value);
		if(this.props.isEdit){
			this.props.updateTodo(this.props.editPos, this.todoInput.value);
		}else{
			this.props.getInput(this.todoInput.value);
		}	
		this.todoInput.value = '';		
		this.todoInput.focus();
	}	

	render(){
		console.log("(3 or 8): render...");
		const {title} = this.state;
		return(
			<React.Fragment>
				<h2>First - {title} </h2>
				<input type="text" ref={ (input) => { this.todoInput = input; } } />
				<input type="submit" value="Submit" onClick={this.setInput} />
			</React.Fragment>
		);
	};
}

export default Todo;