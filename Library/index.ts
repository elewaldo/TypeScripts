import { Author } from "./author.js";
import { Book } from "./book.js";

let oAuthor = new Author("John Doe");

oAuthor.Books.push(
    new Book("Book 1", oAuthor, "1234567890")
);  

oAuthor.Books.forEach(book => {
    console.log(book.Author);
}); 