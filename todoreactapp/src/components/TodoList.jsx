import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoList extends Component {
  
  itemStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
      return (
      <div style={this.itemStyle()}>
     <p>
          <input type="checkbox" onChange={this.props.onComplete.bind(this, id)} /> {' '}
          {this.props.todo.title}
     </p>
      </div>
    )

  }
}

TodoList.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoList

