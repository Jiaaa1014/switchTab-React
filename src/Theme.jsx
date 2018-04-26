import React from 'react'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Page from './components/Page'
export default class Theme extends React.Component {
  // do not using getInitialState(), use constructor() and defined this.state
  constructor() {
    super()
    this.state = {
      currentPage: 'home'
    }
  }

  static defaultProps = {
    brand: 'ReactStrap',
    heading: 'Hello World',
    text: 'this is a bs theme'
  }

  handleChange = (page) => {
    this.setState({ currentPage: page })
  }

  render() {
    let jumbotron
    if (this.state.currentPage === 'home') jumbotron = <Jumbotron heading={this.props.heading} text={this.props.text} />
    else jumbotron = null
    return (
      <div>
        <Navbar
          currentPage={this.state.currentPage}
          brand={this.props.brand}
          change={this.handleChange}
        />
        {jumbotron}
        <Page currentPage={this.state.currentPage} />
      </div>
    )
  }
}