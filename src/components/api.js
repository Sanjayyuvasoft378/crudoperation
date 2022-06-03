import React, { Component } from 'react'
import axios from 'axios';

export default class API extends Component {

    state = {
       posts: []
    }


componentDidMount(){
    console.log(222222)
    axios.get(`https://624585882cfed188172215ab.mockapi.io/api/v1/posts`)
    .then(res => {
      console.log(33333, res)
      this.setState({ posts : res.data})
     
    })
}

componentDidUpdate(){
    console.log(44444444)
}

  render() {
      console.log(11111)
    return (
      <div>
          <h2>Fetch API's Using Axios</h2>
          { this.state.posts.map((post, index) => {
              return(
                    <div>
                        <p>{post.id}</p>
                        <p>{post.name}</p>
                    </div>
              )
        })}
      </div>
    )
  }
}
