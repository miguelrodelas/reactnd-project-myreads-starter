import React, { Component } from 'react'
import Book from './Book'


class SearchResults extends Component {


    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    
                    {this.props.books.map(book => (
                        <li key = { book.id }>
                            <Book 
                                book={ book } 
                                shelfForeachId={ this.props.shelfForeachId }
                                updateShelf={ this.props.updateShelf } />
                        </li>
                    ))}

                </ol>
            </div>
        )
    }
}
    
export default SearchResults



