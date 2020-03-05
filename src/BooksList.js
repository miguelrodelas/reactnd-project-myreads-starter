import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
// import PropTypes from 'prop-types'

class BooksList extends Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  getBooksForShelf = (books, shelfType) => {
    const result = books.filter(book => {
      return book.shelf === shelfType
    });
    console.log(result);
    return result;
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(data => {
        this.setState({
          currentlyReading: this.getBooksForShelf(data, "currentlyReading"),
          wantToRead:       this.getBooksForShelf(data, "wantToRead"),
          read:             this.getBooksForShelf(data, "read")
        });
      });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf type="currentlyReading" books={this.state.currentlyReading} />
            <Bookshelf type="wantToRead" books={this.state.wantToRead} />
            <Bookshelf type="read" books={this.state.read} />
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