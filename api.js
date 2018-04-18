import {
  _getUsers,
  _getBooks,
  _createBook,
  _updateBook,
} from './_database.js'

function toArray (dict) {
  return Object.keys(dict).map(key => ({ ...dict[key] }));
}

export async function getUsers () {
  return _getUsers().then((users) => toArray(users));
}

export function getBooks() {
  return _getBooks().then((books) => toArray(books));
}

export function createBook (book) {
  return _createBook(book).then((b) => b);
}

export function updateBook (book) {
  return _updateBook(book).then((b) => b);
}
