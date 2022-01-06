const libContainer = document.querySelector('.lib-container');
const addBookBtn = document.querySelector('.add-book');
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let submitBtn = document.getElementById("submit-btn");
let myLibrary = [];

addBookBtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

submitBtn.onclick = function() {
    let title = document.getElementById("title-input").value;
    let author = document.getElementById("author-input").value;
    let pages = document.getElementById("pages-input").value;
    let read = document.getElementById("read-check").checked === true ? 'Read' : 'Not Read';
    let newBook = new Book(title, author, pages, read);
    addBook(newBook);

    document.getElementById("title-input").value = '';
    document.getElementById("author-input").value = '';
    document.getElementById("pages-input").value = '';
    document.getElementById("read-check").checked= false;
    modal.style.display = "none";
}

function addBook(newBook) {
    myLibrary.push(newBook);
    addNewBookDisplay();
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.arrInd = myLibrary.length;
    this.info = function () {
        return title + " by " + author + ", " + pages 
        + " pages, " + read;
    }
}

function addBookToLibrary() {
    modal.style.display = "block";
}

function bookDisplay() {
    libContainer.innerHTML="";
    myLibrary.forEach(x => {
        let bookCard = document.createElement('div');
        bookCard.className = "book-card";
        bookCard.value = x.arrInd;

        let bookTitle = document.createElement('h2');
        bookTitle.innerText = x.title;

        let bookAuthor = document.createElement('p');
        bookAuthor.innerText = x.author;

        let bookPages = document.createElement('p');
        bookPages.innerText = x.pages;

        let bookRead = document.createElement('button');
        bookRead.innerText = x.read;
        bookRead.addEventListener('click', changeReadStatus);

        let bookDelete = document.createElement('button');
        bookDelete.innerText = 'Remove book';
        bookDelete.addEventListener('click', deleteBook);

        bookCard.append(bookTitle, bookAuthor, bookPages, bookRead, bookDelete);
        libContainer.appendChild(bookCard);
    });
}

function addNewBookDisplay() {
    let x = myLibrary[myLibrary.length - 1];
    let bookCard = document.createElement('div');
    bookCard.className = "book-card";
    bookCard.value = x.arrInd;

    let bookTitle = document.createElement('h2');
    bookTitle.innerText = x.title;

    let bookAuthor = document.createElement('p');
    bookAuthor.innerText = x.author;

    let bookPages = document.createElement('p');
    bookPages.innerText = x.pages;

    let bookRead = document.createElement('button');
    bookRead.innerText = x.read;
    bookRead.addEventListener('click', changeReadStatus);

    let bookDelete = document.createElement('button');
    bookDelete.innerText = 'Remove book';
    bookDelete.addEventListener('click', deleteBook);
    
    bookCard.append(bookTitle, bookAuthor, bookPages, bookRead, bookDelete);
    libContainer.appendChild(bookCard);
}

function changeReadStatus(e) {
    console.log(e.target.parentElement);
    console.log(e.target.parentElement.value);
    let bookInd = e.target.parentElement.value;
    myLibrary[bookInd].read = myLibrary[bookInd].read === "Read" ? "Not Read" : "Read";
    bookDisplay();
}

function deleteBook(e) {
    let bookInd = e.target.parentElement.value;
    myLibrary.splice(bookInd, 1);
    myLibrary.forEach((x, index) => {
        x.arrInd = index;
    })
    bookDisplay();
}