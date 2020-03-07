import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'


class Search extends Component {
    state = {
        books: []
    }

    searchBook = searchTerm => {
        console.log(searchTerm);
        if (searchTerm === "") {    
            // Don't search if the input is empty
            this.setState({
                books: []
            });
            return;
        }
        BooksAPI.search(searchTerm)
        .then(data => {
            // When successfull, an array is returned. Otherwise, there is an error key in the result
            if(data.error) {     
                console.log(data.error);
            } else {
                this.setState({
                    books: data
                });
            }
            
        });
        
    }

    render() {
        return (
            <div className="search-books">
              <SearchBar searchBook={this.searchBook} />
              <SearchResults 
                books={ this.state.books }
                updateShelf={ this.props.updateShelf } />
            </div>
        )
    }
}


export default Search