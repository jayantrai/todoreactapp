import React, { Component } from 'react'
import Todos from './components/Todos.jsx'
import Form from './components/Form.jsx'
// import uuid from 'uuid'
import About from './components/pages/About.jsx'
import Header from './components/Header.jsx'
import axios from 'axios'

//
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}) )
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>  this.setState({todos: [...this.state.todos.filter(todo => todo.id 
    !== id)] }))
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}))
  
}
 
  render() {
    
    return (
      <Router>
      <div>
        <Header />
      <Route exact path={'/'} render={props => (
        <React.Fragment>
        <Form addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
        onComplete={this.onComplete} 
        onDelete={this.onDelete}/>

        </React.Fragment>

      )} />
      <Route path='/about' component={About} />
 
        
        
      </div>
      </Router>
    )
  }
}



export default App

