import Store from './modules/storage.js';
import UI from './modules/new-book.js';
import Book from './modules/list.js';
import timeDate from './modules/Date&Time.js';

const addNew = document.getElementById('new');
const contact = document.getElementById('contact');
const bookDetails = document.querySelector('.list');
const newBook = document.querySelector('.add-new');
const reachout = document.querySelector('.contact');

addNew.addEventListener('click', (e) => {
  e.preventDefault();
  newBook.style.display = 'flex';
  bookDetails.style.display = 'none';
  reachout.style.display = 'none';
});

contact.addEventListener('click', (e) => {
  e.preventDefault();
  reachout.style.display = 'flex';
  newBook.style.display = 'none';
  bookDetails.style.display = 'none';
});

// date
timeDate();
setInterval(timeDate, 1000);

// Booklist
Book();

// Display
UI();

// Storage
Store();
