
const myLibrary = [];
let removeButtons;

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
    let newId = crypto.randomUUID();
    const newBook = new Book(title, author, pages, haveRead , newId);
    myLibrary.push(newBook);
}

myLibrary.push(
    new Book("1984", "George Orwell", 328, true, 1),
    new Book("The Hobbit", "J.R.R. Tolkien", 310, false, 2),
    new Book("To Kill a Mockingbird", "Harper Lee", 281, true, 3),
    new Book("The Catcher in the Rye", "J.D. Salinger", 277, false, 4),
    new Book("Dune", "Frank Herbert", 412, false, 5),

);


const submitButton = document.querySelector(".submit");
const formElement = document.querySelector('form');
const clearButton = document.querySelector('.clear');
const library = document.querySelector('.library');


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const formData = new FormData(formElement);
    let title = formData.get('title');
    let author = formData.get('author');
    let pages = formData.get('pages');
    let readStatus = formData.get('read');

    addBookToLibrary(title, author, pages, readStatus);
    displayBooksInArray();
    console.log(myLibrary);
    formElement.reset();
});


function displayBooksInArray() {
    library.innerHTML = '';
    myLibrary.forEach((book) => {
        addCard(book);
    })
    addRemoveListener();
}

function addCard(book) {
    library.innerHTML += `<div class="card" data-id=${book.id}">
                <h3 class="title-card">${book.title}</h3>
                <p class="author-card">Author: <span>${book.author}</span></p>
                <p class="pages-card">Pages: <span>${book.pages}</span></p>
                <p class="read-card">Read Status:${book.haveRead ? book.haveRead: "not read"}</span></p>
                <button class="remove-button" id=${book.id}>Remove</button>
            </div>`
}

function addRemoveListener() {
    removeButtons = document.querySelectorAll('.remove-button');

    removeButtons.forEach((removeButton) => {
        removeButton.addEventListener('click', (e) => {
            removeBookFromArray(e);
        }) 
    })
}

function removeBookFromArray(e) {
    let targetId = e.target.id;
    console.log(e.target);
    const indexToRemove = myLibrary.findIndex(item => item.id == targetId);

    if (indexToRemove !== -1 ) {
        myLibrary.splice(indexToRemove, 1);
    }
    displayBooksInArray();
}

displayBooksInArray();




