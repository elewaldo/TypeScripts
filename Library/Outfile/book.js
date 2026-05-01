export { Book };
import { Author } from "./author.js";
class Book extends Author {
    title;
    author;
    isbn;
    constructor(title, author, isbn) {
        super(author);
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//# sourceMappingURL=book.js.map