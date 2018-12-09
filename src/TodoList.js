import React, {Component} from 'react';

class TotoList extends Component{

	/* constructor(props){
		super(props);
	} */
	render() {
		const {data,deleteTodo,editTodo} = this.props
		return(

			<ol>
				{
					data.map((name, key) => (
					// Without the `key`, React will fire a key warning
					// <React.Fragment key={key}>
					<li key={key}> <p> {name} </p> <a href="javascript:;" onClick={ () => {editTodo(key)} }>Edit</a> <a href="javascript:;" onClick={ () => {deleteTodo(key)} }>x</a></li>
					// </React.Fragment>
				))
				}
			</ol>
		);
	}

}

export default TotoList; 
