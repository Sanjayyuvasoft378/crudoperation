import React, { Component } from 'react'

class First extends Component{
  constructor(props){
    super(props)
    this.state = {
      name : "Karuna",
      age : 23,
      designation: "python developer"
    }
  }
  render (){
    return(
      <div>
        <h2>Employee Information </h2>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.designation}</p>
      </div>
    )
  }
}
export default First;