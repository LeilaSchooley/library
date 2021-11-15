let bookList = document.getElementById("books");

let newBookButton = document.getElementById("new-book");
let form = document.querySelector("form");
let submitButton = document.getElementById("submit");

let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");
let hasReadBook = document.getElementById("read");

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () =>
      `${this.title} by ${this.author}, ${this.pages} pages, read book: ${this.read}`;
  }
}

function addBookToLibrary(bookName) {
  // do stuff here
  myLibrary.push(bookName);
}

Book.prototype.toggleReadStatus = function () {
  if (this.read === "false") {
    this.read = "true";
  } else {
    this.read = "false";
  }
};

function addBookToPage(array) {
  bookList.textContent = "";
  array.forEach((element, index) => {
    let newBook = document.createElement("div");

    newBook.setAttribute("data-book", index);

    let removeButton = document.createElement("button");

    let readBookButton = document.createElement("button");

    readBookButton.textContent = "Read Book";

    readBookButton.setAttribute("data-read", index);

    removeButton.textContent = "Remove Book";

    removeButton.setAttribute("data-remove", index);

    newBook.textContent = element.info();

    newBook.appendChild(readBookButton);
    newBook.appendChild(removeButton);

    bookList.appendChild(newBook);
  });
  removeBook();
  changeReadBookStatus();
}

function changeReadBookStatus() {
  let readBookButtons = document.querySelectorAll("[data-read]");
  readBookButtons.forEach((element, index) =>
    element.addEventListener("click", () => {
      obj = myLibrary[index];

      obj.toggleReadStatus();

      addBookToPage(myLibrary);
    })
  );
}

function removeBook() {
  let removeButtons = document.querySelectorAll("[data-remove]");

  removeButtons.forEach((element, index) =>
    element.addEventListener("click", () => {
      myLibrary.splice(index, 1);

      addBookToPage(myLibrary);
    })
  );
}

submitButton.addEventListener("click", (e) => {
  if ((author.value && title.value && pages.value) !== "") {
    e.preventDefault();
    theHobbit = new Book(
      author.value,
      title.value,
      pages.value,
      hasReadBook.textContent.toLowerCase()
    );

    addBookToLibrary(theHobbit);

    addBookToPage(myLibrary);
  }
});

hasReadBook.addEventListener("click", () => {
  if (hasReadBook.textContent === "True") {
    hasReadBook.textContent = "False";
  } else if (hasReadBook.textContent === "False") {
    hasReadBook.innerText = "True";
  }
});
