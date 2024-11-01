const myLibrary = [];
const addButton = document.getElementsByClassName("add-button")[0];
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
    const listItem = document.createElement("div");
    listItem.classList.add("card-component");

    const title = document.createElement("p");
    title.textContent = `Title: ${myLibrary[i].title}`;

    const author = document.createElement("p");
    author.textContent = `Author: ${myLibrary[i].author}`;

    const numPages = document.createElement("p");
    numPages.textContent = `Number of Pages: ${myLibrary[i].numPages}`;

    const isRead = document.createElement("p");
    isRead.textContent = `Is Read: ${myLibrary[i].isRead ? 'Read' : 'Not read yet'}`;
    isRead.style.color = myLibrary[i].isRead ? 'green' : 'red';

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const removeButton = document.createElement("button");
    removeButton.classList.add("button");
    removeButton.style.backgroundColor = 'red';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        myLibrary.splice(i, 1);
        displayList.removeChild(listItem);
    });

    const toggleReadButton = document.createElement("button");
    toggleReadButton.classList.add("button");
    toggleReadButton.style.backgroundColor = myLibrary[i].isRead ? 'red' : 'green';
    toggleReadButton.textContent = myLibrary[i].isRead ? 'Not Read' : 'Read';
    toggleReadButton.addEventListener('click', () => {
        myLibrary[i].isRead = !myLibrary[i].isRead;
        if (myLibrary[i].isRead == true) {
            toggleReadButton.style.backgroundColor = "red";
            toggleReadButton.textContent = "Not Read";
            isRead.textContent = "Is Read: Read";
            isRead.style.color = "green";
        } else {
            toggleReadButton.style.backgroundColor = "green";
            toggleReadButton.textContent = "Read";
            isRead.textContent = "Is Read: Not read yet";
            isRead.style.color = "red";
        }
    })

    //appending child elements to their parent component
    listItem.appendChild(title);
    listItem.appendChild(author);
    listItem.appendChild(numPages);
    listItem.appendChild(isRead);
    buttonsDiv.appendChild(removeButton);
    buttonsDiv.appendChild(toggleReadButton);
    listItem.appendChild(buttonsDiv);

    displayList.appendChild(listItem);
    
}