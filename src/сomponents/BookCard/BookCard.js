import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/MainPage/MainPage.css';

const BookCard = ({ books }) => {
  return (
    <>
      {books.map((book) => {
        const bookCoverContent = book.main_book_content.filter(
          (content) => content.__typename === 'PdpBookV2MainBookContentMainImageBlock' &&
            content.main_image_block && content.main_image_block.bookcoverimageConnection
        );

        return (
          <div className="book-card" key={book.system.uid}>
            <Link style={{ textDecoration: 'none' }} to={`/book/${book.system.uid}`}>
              <div className="book-cover-container">
                {bookCoverContent.map((content) => (
                  <img
                    className="book-cover"
                    key={content.main_image_block.bookcoverimageConnection.edges[0].node.url}
                    src={`${content.main_image_block.bookcoverimageConnection.edges[0].node.url}?width=160`}
                    alt={book.book_header.booktitle}
                  />
                ))}
              </div>
              <h3 className="book-title-small">{book.book_header.booktitle}</h3>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default BookCard;
