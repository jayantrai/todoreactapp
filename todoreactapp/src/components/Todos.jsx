import React, { Component } from 'react'
import TodoList from './TodoList.jsx'
import PropTypes from 'prop-types'

class Todos extends Component {
  
  render() { 
    return this.props.todos.map(todo => (
          <TodoList key={todo.id} todo={todo} onComplete={this.props.onComplete}
          onDelete={this.props.onDelete}/>
        ))
     
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired

}

 
export default Todos
