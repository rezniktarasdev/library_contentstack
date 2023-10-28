import { gql } from '@apollo/client';

const ALL_BOOKS_QUERY = gql`
query MyQuery($skip: Int!, $limit: Int!) {
    all_pdp_book_v_2(skip: $skip, limit: $limit) {
        items {
            book_header {
            booktitle
            }
            main_book_content {
            ... on PdpBookV2MainBookContentMainImageBlock {
                __typename
                main_image_block {
                bookcoverimageConnection {
                    edges {
                    node {
                        url
                    }
                    }
                    totalCount
                }
                }
            }
            }
            system {
            uid
            }
        }
        total
        }
}
`;

const ONE_BOOK_QUERY = gql`
    query MyQuery($bookId: String!) {
    pdp_book_v_2(uid: $bookId) {
        book_header {
        booktitle
        global_field {
            star
        }
        }
        main_book_content {
        ... on PdpBookV2MainBookContentMainContentBlock {
            __typename
            main_content_block {
                book_author
                booknumberofpages
                bookshortdescription
                external_link {
                    href
                }
                referenceConnection {
                edges {
                    node {
                    ... on CopyrightLibrary {
                        copyright_update {
                            json
                        }
                    }
                    }
                }
                }
            }
        }
        ... on PdpBookV2MainBookContentMainImageBlock {
            __typename
            main_image_block {
            bookcoverimageConnection {
                edges {
                node {
                    url
                }
                }
            }
            }
        }
        }
    }
    }
`;


export {
    ALL_BOOKS_QUERY,
    ONE_BOOK_QUERY,
};

