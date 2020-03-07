import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import Search from './Search'
import * as BooksAPI from './BooksAPI'



class BooksApp extends React.Component {
  state = {
    myBooks: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  getBooksForShelf = (books, shelfType) => {
    const result = books.filter(book => {
      return book.shelf === shelfType
    });
    // console.log(result);
    return result;
  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(book => { // Array with ids for each shelf
        this.getAllBooks();
      })
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then(data => {
        this.setState({
          myBooks: {
            currentlyReading: this.getBooksForShelf(data, "currentlyReading"),
            wantToRead:       this.getBooksForShelf(data, "wantToRead"),
            read:             this.getBooksForShelf(data, "read")
          }
        });
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList 
            myBooks={ this.state.myBooks }
            updateShelf={ this.updateShelf } />
        )} />
        <Route exact path='/search' render={() => (
          <Search
            updateShelf={ this.updateShelf }/>
        )} />
      </div>
    )
  }
}

export default BooksApp
