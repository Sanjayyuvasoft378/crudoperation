import React, { Component } from 'react'
    
class Second extends Component { 
  constructor(props){ 
    super(props) 
        
    // Set initial state 
    this.state = {
      test: "Nil",
      questions: "0",
      students: "0"
    } 
        
    // Binding this keyword 
    this.updateState = this.updateState.bind(this) 
  } 

  updateState(){ 
    // Changing state 
    this.setState({
      test: 'Programming Quiz',
      questions: '10',
      students: '30'
    }) 
  } 
      
  render(){ 
    return ( 
      <div> 
        <h2>Test Portal</h2>      
        <p>{this.state.test}</p>
   
        <p>{this.state.questions}</p>
   
        <p>{this.state.students}</p>
        {/* Set click handler */} 
        <button onClick={this.updateState}> 
          Click me!
        </button> 
      </div> 
    ) 
  } 
} 
    

