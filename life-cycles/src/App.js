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
      .then((res) => res.json())
      .then((res) => {
        const response = res.filter(singleComment => singleComment.id <= 10)
        this.setState({
          comments: [...response],
          prevComments: ''
        })
      })
  }

  deleteComment = () => {
    this.setState({
      comments: this.prevState.comments.pop(),
      prevComments: this.prevState.comments
    })
    console.log(this.state)
  }

  render() {
    const commentsGroup = this.state.comments;
    return (
      <div className='containerup'>
        <button className='btn' onClick={this.deleteComment}>Delete comment</button>
        <ol className="container">
          {commentsGroup.map(eachComment => {
            return <li key={eachComment.id} className='singleComment'>
              {eachComment.body}</li>
          })}
        </ol>

      </div>
    )
  }
}
export default App