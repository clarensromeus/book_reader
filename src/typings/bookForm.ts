type state = 'search' | 'create'

interface bookForms {
    title: string;
    author: string;
    state: state
}

export type {
    bookForms
}