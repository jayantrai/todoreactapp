import React, { Component } from 'react'
import TodoList from './TodoList.jsx'

class Todos extends Component {
  render() { 
    return ( 
        this.props.todos.map(todo => (
          <TodoList todo={todo}/>
        ))
     )
  }
}
 
export default Todos;
