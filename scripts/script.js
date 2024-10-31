const myLibrary = [];
const displayList = document.getElementsByClassName("display")[0];
const book1 = new Book("The Midnight Library", "Matt Haig", 304, false);
const book2 = new Book("Educated: A Memoir", "Tara Westover", 352, true);

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}

function addBookToLibrary (title, author, numPages, isRead) {
    const newBook = newBook(title, author, numPages, isRead);
    myLibrary.push(newBook);
}
myLibrary.push(book1);
myLibrary.push(book2);
for (let i = 0; i < myLibrary.length; i++) {
    let listItem = document.createElement("div");
    listItem.classList.add("card-component");

    let innerhtml = `<p> Title: ${myLibrary[i].title}</p>\
                     <p> Author: ${myLibrary[i].author}</p>
                     <p> Number of Pages: ${myLibrary[i].numPages}</p>
                     <p style="color: ${myLibrary[i].isRead ? "green" : "red"}"> IsRead: ${myLibrary[i].isRead ? "Read" : "Not read yet"}
                     <div class="buttons">
                     <button class = "button" style="background-color: red;">Remove</button>
                     <button class="button" style="background-color: ${myLibrary[i].isRead ? "red" : "green"}">${myLibrary[i].isRead ? 'Not Read' : 'Read'} </button>`
    listItem.innerHTML = innerhtml;

    displayList.appendChild(listItem);
    
}