export { Book };
import { Author } from "./author.js";
class Book extends Author {
    title;
    isbn;
    Author;
    constructor(title, author, isbn) {
        super(author.name);
        this.title = title;
        this.isbn = isbn;
        this.Author = author;
    }
}
//# sourceMappingURL=book.js.map