import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component {

  searchBook = (event) => {
    this.props.searchBook(event.target.value);
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" onChange={this.searchBook} placeholder="Search by title or author" />
        </div>
      </div>
    )
  }
}


export default SearchBar