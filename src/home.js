import React, { Component } from 'react'
import './Home.css'

class home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       uname:'',
       age:'',
       degree:'',
       contact:''
    }
  }
    HandleUnameChange = (event) =>{
        this.setState({
          uname: event.target.value
        })
    }
    HandleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    HandleDegreeChange = (event) => {
      this.setState({
            degree: event.target.value
      })
    }
    HandleContactChange = (event) => {
      this.setState({
            contact: event.target.value
      })
    }
    OnSubmit = (event) => {
      
    console.log('Username: ',this.state.uname)
    console.log('Age: ',this.state.age)
    console.log('Degree: ',this.state.degree)
    console.log('Contact: ',this.state.contact)
    //event.preventDefault()

    }
    
  render() {
    
     return (
      <div className='pg'>
        <br/><h1>STUDENT MANAGEMENT SYSTEM</h1><br/>
        
        <form  className = 'form' onSubmit={this.OnSubmit}>
          <label>Student Name: </label>
          <input type='text' className = "Textbox1" value={this.state.uname} onChange={() => { this.setState({name : ''}) }}/><br/>
          <label>Student Age: </label>
          <input type='text' className = "Textbox2" value={this.state.age} onChange={this.HandleAgeChange}/><br/>
          <label>Student Degree: </label>
          <input type='text' className = "Textbox3" value={this.state.degree} onChange={this.HandleDegreeChange}/><br/>
          <label>Student Contact: </label>
          <input type='text' className = "Textbox4" value={this.state.contact} onChange={this.HandleContactChange}/><br/>
          <br/>
          <button className='button'>SUBMIT</button>
          
        </form>
    </div>
    
    )
  }
  
}

export default home
//onChange={() => { this.setState({name : '' Boofu"}) }