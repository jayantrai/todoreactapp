import React, { Component } from 'react'
import Todos from './components/Todos.jsx'
import Form from './components/Form.jsx'


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
  onComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  onDelete = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id 
    !== id

    )]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: 4, 
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
 
  render() {
    
    return (
      <div>
        <Form addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
        onComplete={this.onComplete} 
        onDelete={this.onDelete}/>
        
      </div>
    )
  }
}



export default App

