const libContainer = document.querySelector('.lib-container');
let myLibrary = [];

// Test Code
let someBook = new Book('Dune', 'Frank Herbert', 500, 'Read');
let someBook2 = new Book('Children of Dune', 'Frank Herbert', 501, 'Not Read');
addBookToLibrary(someBook);
addBookToLibrary(someBook2);
bookDisplay();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.info = function () {
        return title + " by " + author + ", " + pages 
        + " pages, " + read;
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function bookDisplay() {
    myLibrary.forEach(x => {
        let bookCard = document.createElement('div');
        bookCard.className = "book-card";
        let bookTitle = document.createElement('h3');
        bookTitle.innerText = x.title;
        let bookAuthor = document.createElement('p');
        bookAuthor.innerText = x.author;
        let bookPages = document.createElement('p');
        bookPages.innerText = x.pages;
        let bookRead = document.createElement('button');
        bookRead.innerText = x.read;
        
        bookCard.append(bookTitle, bookAuthor, bookPages, bookRead);
        libContainer.appendChild(bookCard);
    })
}