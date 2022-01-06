const libContainer = document.querySelector('.lib-container');
const addBookBtn = document.querySelector('.add-book');
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let myLibrary = [];

addBookBtn.addEventListener("click", addBookToLibrary);
span.onclick = function() {
    modal.style.display = "none";
}

// Test Code
let someBook = new Book('Dune', 'Frank Herbert', 500, 'Read');
let someBook2 = new Book('Children of Dune', 'Frank Herbert', 501, 'Not Read');
addBook(someBook);
addBook(someBook2);
bookDisplay();

function addBook(newBook) {
    // console.log("Adding a book...")
    
    myLibrary.push(newBook);
}

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

function addBookToLibrary() {
    console.log("Adding a book...")
    modal.style.display = "block";
    //myLibrary.push(newBook);
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