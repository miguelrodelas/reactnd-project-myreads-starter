import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
// import PropTypes from 'prop-types'

class Book extends Component {

  render() {
    const thumbnail = (this.props.book.imageLinks) ? this.props.book.imageLinks.smallThumbnail:""
    const authors = (this.props.book.authors) ? this.props.book.authors:[];
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url( ${thumbnail} )`}}></div>
          <BookShelfChanger book={this.props.book} updateShelf={this.props.updateShelf} />
        </div>
        <div className="book-title">{ this.props.book.title }</div>
        <div className="book-authors"> 
          { authors.map(author => (
            <div key={ author }> { author } </div>
          )) } 
        </div>
      </div>
    )
  }
}

export default Book
