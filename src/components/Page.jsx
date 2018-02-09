import React from 'react'

export default class Page extends React.Component {
  render() {
    const page = this.props.currentPage;
    const pageContent = `This is the ${page} page`
    return (
      <div className="container">
        <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
        {pageContent}</div>
    )
  }
} 