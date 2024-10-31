const myLibrary = [];
const displayList = document.getElementsByClassName("display-list")[0];
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
    let listItem = document.createElement("li");
    let innerhtml = `<p> Title: ${myLibrary[i].title}</p>\
                     <p> Author: ${myLibrary[i].author}</p>
                     <p> Number of Pages: ${myLibrary[i].numPages}</p>
                     <p> IsRead: ${myLibrary[i].isRead ? "Read" : "Not read yet"}`
    listItem.innerHTML = innerhtml;
    displayList.appendChild(listItem);
    
}