import React, { Component } from 'react'
import Book from './Book'
// import PropTypes from 'prop-types'

// Currently reading, whant to read, read
class Bookshelf extends Component {


  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.type === "currentlyReading" ? "Currently Reading":""}
          {this.props.type === "wantToRead" ? "Want to read":""}
          {this.props.type === "read" ? "Read":""}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map(book => (
            <li key={book.id}>              
                <Book book={book} />             
            </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf