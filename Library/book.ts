export { Book };
import { Author } from "./author.js";
import { IAuthor, IBook } from "./model.js";

class Book extends Author implements IBook {
    title: string;
    isbn: string;
    Author: IAuthor;

    constructor(title: string, author: IAuthor, isbn: string) {
        super(author.name);

        this.title = title;
        this.isbn = isbn;
        this.Author = author;
    }
}