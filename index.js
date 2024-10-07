const dialog = document.querySelector("dialog");
const addNew = document.querySelector("#add-new");
const addBook = document.querySelector("#add-btn");
const titleInput = document.querySelector("#title-inp");
const authorInput = document.querySelector("#author-inp");
const bookContainer = document.querySelector("#book-container");

addNew.addEventListener("click", () => {
    dialog.showModal();
})

addBook.addEventListener("click", () => {
    dialog.close();
    var book = new Book(titleInput.value, authorInput.value);
    displayBook(book);
})

function Book(title, author, read){
    this.title = title;
    this.author = author;
    this.read = false;
}

function displayBook(book){
    var titleDisplay = document.createElement("p");
    titleDisplay.innerHTML = "Title: " + book.title;
    var authorDisplay = document.createElement("p");
    authorDisplay.innerHTML = "Author: " + book.author;
    var checkboxLabel = document.createElement("label");
    checkboxLabel.innerHTML = "read: ";
    var readDisplay = document.createElement("input");
    readDisplay.setAttribute("type", "checkbox");
    readDisplay.addEventListener("change", () => {
        book.read = !book.read;
    })
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Remove";
    deleteButton.addEventListener("click", () => {
        bookCard.remove();
    })
    var bookCard = document.createElement("div");
    bookCard.appendChild(titleDisplay);
    bookCard.appendChild(authorDisplay);
    bookCard.appendChild(checkboxLabel);
    bookCard.appendChild(readDisplay);
    bookCard.appendChild(deleteButton);
    bookCard.classList.add("book-card");
    bookContainer.appendChild(bookCard);
}