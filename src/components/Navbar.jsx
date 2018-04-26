import React from 'react'
export default class Navbar extends React.Component {
  // do not use getDefaultProps, use static get defaultProps
  // if parent has static get ... then things defined here is useless
  // static get defaultProps() {
  //   return {
  //     brand: 'ReactStrapdd'
  //   }
  // }

  change = (page) => {
    this.props.change(page)
  }

  // change(page){/*  */} vs onClick={()=>this.change('home')}
  // change(page){/*  */} vs onClick={this.change.bind(this, 'home')}

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">{this.props.brand}</a>
          </div>
          <div id="navbar">
            <div className="nav navbar-nav">
              <li className={this.props.currentPage === 'home' ? 'active' : ''}><a href="#" onClick={this.change.bind(this, 'home')}>Home</a></li>
              <li className={this.props.currentPage === 'about' ? 'active' : ''}><a href="#" onClick={this.change.bind(this, 'about')}>About</a></li>
              <li className={this.props.currentPage === 'contact' ? 'active' : ''}><a href="#" onClick={this.change.bind(this, 'contact')}>Contact</a></li></div>
          </div>
        </div>
      </nav>
    )
  }
} 