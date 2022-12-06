import Book from './list.js';
import Store from './storage.js';

class UI {
  static showBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const library = document.querySelector('#book-lists');
    const showBooks = document.createElement('div');

    showBooks.innerHTML = `
    <div>${book.title}</div>
    <div>${book.author}</div>
        <div><button type="submit" class="remove">Remove</button></div>
        <hr>
        `;
    library.appendChild(showBooks);
  }

  static removeBook(remove) {
    if (remove.classList.contains('remove')) {
      remove.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
document.addEventListener('DOMContentLoaded', UI.showBooks);

// Event : Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  //  Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  //   Instantiate book
  const book = new Book(title, author);

  //   Add Book to UI
  UI.addBookToList(book);

  //   Add book to store
  Store.addBook(book);

  //   Clear Fields
  UI.clearField();
});

// Event: Remove a Book
document.querySelector('#book-lists').addEventListener('click', (e) => {
  UI.removeBook(e.target);
});

export default UI;
