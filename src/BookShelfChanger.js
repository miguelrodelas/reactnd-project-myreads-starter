import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
// import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
    state = {
        shelf: 'none'
    }

    updateShelf = event  => {
         this.props.updateShelf(this.props.book, event.target.value);
    }

    componentDidMount() {
        BooksAPI.get(this.props.book.id)
            .then((book) => {
                this.setState({shelf: book.shelf})
            })
            .catch(e => {
                console.log("book "+ this.props.book.title +" not found");
            });
    }
    

    render() {

        return (
            <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={this.updateShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger
