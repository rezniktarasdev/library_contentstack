import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_BOOKS_QUERY } from '../../apollo/queries';
import BookCard from '../../сomponents/BookCard/BookCard';
import { ImBook } from 'react-icons/im';

const MainPage = () => {
  const limit = 4;
  const [page, setPage] = useState(1);
  const skip = (page - 1) * limit;

  const { loading, error, data, refetch } = useQuery(ALL_BOOKS_QUERY, {
    variables: { skip, limit },
  });

  useEffect(() => {
    refetch({ skip });
  }, [skip, refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { all_pdp_book_v_2: { items: books, total: totalCount } } = data || {};

  const totalPages = Math.ceil(totalCount / limit);

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="main-container">
      <h1 className="title">
        Е-бібліотека
        <ImBook className="book-icon" />
      </h1>

      <div className="book-list">
        <BookCard books={books} />
      </div>

      {totalPages > 1 && (
        <div className={`pagination ${page === 1 ? 'first-page' : ''}`}>
          <button
            className={`pagination-button ${page === 1 ? 'disabled' : ''}`}
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className={`pagination-button ${page === totalPages ? 'disabled' : ''}`}
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
