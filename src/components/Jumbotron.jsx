import React from 'react'

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>{this.props.heading}</h1>
          <p className="lead">{this.props.text}</p>
          <p><a href="#" className="btn btn-primary btn-lg">Learn more</a></p>
        </div>
      </div>
    )
  }
} 