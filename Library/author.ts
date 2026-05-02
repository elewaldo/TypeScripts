export { Author };
import { IAuthor, IBook } from "./model.js";

class Author implements IAuthor {
    name: string;
    Books: IBook[];

    constructor(name: string) {
        this.name = name;
        this.Books = [];
    }
}