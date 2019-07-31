import React, { Component } from 'react'
import axios from 'axios'
import parse from 'html-react-parser'
import './assets/css/js_composer.min.css'

export default class App extends Component {
  //Constructor and init default state
  constructor() {
    super();
    this.state = {
        data:[]
    }
}

// Function to receivedata from the endpoint
receiveData(){
  axios
      .get(`http://localhost/dtgolf/wp-json/wp/v2/pages/128`, {})
      .then(res => {
          const data = res.data
          console.log(data)
          const content = parse(data.content.rendered)


          this.setState({content})
          
})
      .catch((error) => {
          console.log(error)
      })
}

//Calling the receiveData function inside lifecycle method
componentDidMount(){
  this.receiveData()
}

  render() {
    return (
      <div>
       {this.state.content}
      </div>
    )
  }
}

