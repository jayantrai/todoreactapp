import React, { Component } from 'react'

class Todolist extends Component {
  render() {
    console.log(this.props.todo)
    return (
      <div>
     <h3>{this.props.todo.title}</h3>
      </div>
    )
  }
}

export default Todolist

