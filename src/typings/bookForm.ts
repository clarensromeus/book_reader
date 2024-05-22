type state = 'search' | 'create'

// type for creating a book
interface bookForms {
    title: string;
    author: string;
    state: state
}

// type for retrieving all books
interface IbookList extends Omit<bookForms, "state"> {
    id: string;
    date_publish: string;
}

export type {
    bookForms,
    IbookList
}