export { Book };
import { IAuthor, IBook } from "./model.js";

class Book implements IBook {
    title: string;
    isbn: string;
    Author: IAuthor;

    constructor(title: string, author: IAuthor, isbn: string) {
        this.title = title;
        this.isbn = isbn;
        this.Author = author;
    }
}