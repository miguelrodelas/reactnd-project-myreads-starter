import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import Search from './Search'



class BooksApp extends React.Component {
  state = {
    
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList />
        )} />
        <Route exact path='/search' render={() => (
            <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
