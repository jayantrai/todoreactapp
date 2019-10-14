import React from 'react'

class Form extends React.Component {
    state = { 
        title: ''
     }

    onChange = (e) => {
       this.setState({[e.target.name]: e.target.value })
    } 
    onSubmit = (e) => {
        e.preventDefault() // prevent from submitting to the actual file
        this.props.addTodo(this.state.title) // props to submit up the the main component
        this.setState({ title: ''}) // to clear the fields

    }


    render() { 
        return ( 
           
           <form onSubmit={this.onSubmit}>

            <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
            <input type="submit" value="submit" className="btn"/>
            </form>
            
      
            
          )
    }
}
 
export default Form;