import React, { Component } from 'react'
import Todos from './components/Todos.jsx'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Go out for dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Play Soccer',
        completed: false
      }
    ]
  }
  onComplete = () => {
    console.log('hello')
  }
  render() {
    
    return (
      <div>
        <Todos todos={this.state.todos} onComplete={this.onComplete}/>
      </div>
    )
  }
}

export default App

