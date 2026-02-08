const myLibrary = [];

function Book(title, author, pages, haveRead, id) {
    if (!new.target) {
        throw Error("Use 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = id;
    this.info = function () {
        return `The title of the book is ${this.title}`;
    }
}

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead , crypto.randomUUID());
    myLibrary.push(newBook);
}

const submitButton = document.querySelector(".submit");
