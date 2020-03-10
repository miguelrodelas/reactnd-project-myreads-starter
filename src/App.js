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
      read: [],
      shelfForeachId: new Map()
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

  getShelfForeachId = (data) => {
    let shelfForeachId = new Map();
    data.map(book => (
      shelfForeachId.set(book.id, book.shelf)
    ));
    return shelfForeachId;
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then(data => {
        this.setState({
          myBooks: {
            currentlyReading: this.getBooksForShelf(data, "currentlyReading"),
            wantToRead:       this.getBooksForShelf(data, "wantToRead"),
            read:             this.getBooksForShelf(data, "read"),
            shelfForeachId:   this.getShelfForeachId(data)
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
            shelfForeachId={ this.state.myBooks.shelfForeachId }
            updateShelf={ this.updateShelf } />
        )} />
        <Route exact path='/search' render={() => (
          <Search
            shelfForeachId={ this.state.myBooks.shelfForeachId }
            updateShelf={ this.updateShelf }/>
        )} />
      </div>
    )
  }
}

export default BooksApp
