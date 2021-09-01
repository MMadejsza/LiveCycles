import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comments: [],
    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res.filter(singleComment => singleComment.id <= 10)
        })
      })

    console.log(this.state);

  }

  render() {
    return (
      <div className="container">
        <ol>
          { }
        </ol>

      </div>
    )
  }
}
export default App