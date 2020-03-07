import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
// import PropTypes from 'prop-types'

class BooksList extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf 
              type="currentlyReading" 
              books={this.props.myBooks.currentlyReading}
              updateShelf={this.props.updateShelf}  />
            <Bookshelf
              type="wantToRead" 
              books={this.props.myBooks.wantToRead}
              updateShelf={this.props.updateShelf}  />
            <Bookshelf 
              type="read" 
              books={this.props.myBooks.read}
              updateShelf={this.props.updateShelf}  />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}


export default BooksList