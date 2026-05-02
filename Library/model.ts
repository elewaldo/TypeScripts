export interface IAuthor{
    name: string;

    Books: IBook[]; // Composition: An Author can have multiple Books
}

export interface IBook{
    title: string;
    isbn: string;
    
    // Association with Author
    Author: IAuthor;
}