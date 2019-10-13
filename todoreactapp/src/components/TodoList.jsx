import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    return (
      <div>
        
        <h3>
        <input type="checkbox" name="title" id=""/>{ ' ' }
        {this.props.todo.title}
        </h3>
      </div>
    )
  }
}

export default TodoList
