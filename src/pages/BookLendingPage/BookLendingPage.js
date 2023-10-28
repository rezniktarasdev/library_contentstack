// import { useParams, Link  } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { ONE_BOOK_QUERY } from '../../apollo/queries';
// import StarRating from '../../сomponents/StarRating/StarRating'
// import './BookLendingPage.css'

// const BookLendingPage = () => {
//     const { bookId } = useParams();


// const { loading, error, data } = useQuery(ONE_BOOK_QUERY, {
//     variables: { bookId }
// });

//     if (loading) {
//     return <div>Loading...</div>;
//     }

//     if (error) {
//     return <div>Error: {error.message}</div>;
//     }

//     const book = data.pdp_book;
//     const imageUrl = book.book_card.bookcoverimageConnection.edges[0].node.url;

//     return (
//         <div className="card-container">
//             <Link to="/" className="back-button">
//                 Назад
//             </Link>
//             <h1>{book.title}</h1>
//             <StarRating rating={book.book_card.star} />
//             <img
//                 src={`${imageUrl}?width=300`}
//                 alt={book.book_card.booktitle}
//             />
//             <p><span className="bold-text">Автор:</span> {book.book_card.book_author}</p>
//             <p><span className="bold-text">Кількість сторінок:</span> {book.book_card.booknumberofpages}</p>
//             <p>{book.book_card.bookshortdescription}</p>
//             <a
//                 className="buy-link"
//                 href={book.book_card.external_link.href || '#'}
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 {book.book_card.external_link.href ? 'Купити' : 'Недоступно для покупки'}
//             </a>
//         </div>
//     );
// };

// export default BookLendingPage;


import { useParams, Link  } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ONE_BOOK_QUERY } from '../../apollo/queries';
import StarRating from '../../сomponents/StarRating/StarRating'
import './BookLendingPage.css'

const BookLendingPage = () => {
    const { bookId } = useParams();

const { loading, error, data } = useQuery(ONE_BOOK_QUERY, {
    variables: { bookId }
});

    if (loading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Error: {error.message}</div>;
    }

    const book = data.pdp_book_v_2;
    const imageUrl = book.main_book_content[0].main_image_block.bookcoverimageConnection.edges[0].node.url;
    const copyright = book.main_book_content[1].main_content_block.referenceConnection.edges[0].node.copyright_update.json.children[0].children[0].text;

    console.log(copyright);


    return (
        <div className="card-container">
            <Link to="/" className="back-button">
                Назад
            </Link>
            <h1>{book.book_header.booktitle}</h1>
            <StarRating rating={book.book_header.global_field.star} />
            <img
                src={`${imageUrl}?width=300`}
                alt={book.book_header.booktitle}
            />
            <p><span className="bold-text">Автор:</span> {book.main_book_content[1].main_content_block.book_author}</p>
            <p><span className="bold-text">Кількість сторінок:</span> {book.main_book_content[1].main_content_block.booknumberofpages}</p>
            {<p>{book.main_book_content[1].main_content_block.bookshortdescription}</p>}
            <a
                className="buy-link"
                href={book.main_book_content[1].main_content_block.external_link.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
            >
                {book.main_book_content[1].main_content_block.external_link.href ? 'Купити' : 'Недоступно для покупки'}
            </a>
            <span className='copyright_book'>{copyright}</span>
        </div>
    );
};

export default BookLendingPage;