import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/apolloClient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import BookLendingPage from './pages/BookLendingPage/BookLendingPage';
import Page404 from './pages/404/404';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/book/:bookId" element={<BookLendingPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
            </Router>
        </ApolloProvider>
    );
};

export default App;
