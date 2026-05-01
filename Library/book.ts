export { Book };
import { Author } from "./author.js";

class Book extends Author{
    title: string;
    author: string;
    isbn: string;

    constructor(title: string, author: string, isbn: string) {
        super(author);

        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}