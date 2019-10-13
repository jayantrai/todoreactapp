class Todolist extends Component {
import React, { Component } from 'react'

  render() {
    
    return (
      <div>
     <h3>
          {this.props.todo.title}
     </h3>
      </div>
    )

  }
}

export default Todolist

