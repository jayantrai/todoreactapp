import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoList extends Component {
  
  itemStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }




  render() {
    const { id, title } = this.props.todo // destructuring 
      return (
      <div style={this.itemStyle()}>
     <p>
          <input type="checkbox" onChange={this.props.onComplete.bind(this, id)} /> {' '}
          {title} {' '}
          <button onClick={this.props.onDelete.bind(this, id)}>Delete</button>
     </p>
      </div>
    )

  }
}

TodoList.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoList

