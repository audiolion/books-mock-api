# Books Mock API

This is a mock api to use for frontend applications that simulates a simple book system.

## Usage

```js
import api from 'books-mock-api';

const users = await api.getUsers();

const books = await api.getBooks();

const book = books[0];
book.checked_out = users[3].id;

api.updateBook(book).then(console.log);

book.title = 'New title';

const newBook = await api.createBook(book);
// newBook.id === new_title
```

If you want to play around with the api, open the `index.html` file in your browser and open the devtools console and run commands like above, `api` is already available on the `window`.

## API

```
api.getUsers() returns a list of all users
api.getBooks() returns a list of all books
api.createBook(book) creates and returns a new book
api.updateBook(book) updates an existing book
```

**note** `api.updateBook` is like a `PUT` operation and you must pass all keys in the book object.

A book can only be `checked_out` by one user, but a user can check out many books. Updating and adding reviews is not supported (you can modify the field on the book object, but it won't update the corresponding user object references and there is no api for reviews retrieval).

User example data:
```js
ryan_florence: {
  id: 'ryan_florence',
  name: 'Ryan Florence',
  avatarURL: 'https://pbs.twimg.com/profile_images/937382461918478336/AxXNkFRG_bigger.jpg',
  reviews: [],
  checked_out: ['console_wars', 'american_kingpin'],
}
```

Book example data:
```js
console_wars: {
    id: 'console_wars',
    title: 'Console Wars: Sega, Nintendo, and the Battle that Defined a Generation',
    author: 'Harris J. Blake',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51zpf17Eh1L._SX330_BO1,204,203,200_.jpg',
    checked_out: 'ryan_florence',
    reviews: [
      {
        id: 5,
        user: null,
        rating: 4,
        book: 'console_wars',
      },
      {
        id: 6,
        user: null,
        rating: 2,
        book: 'console_wars',
      },
      {
        id: 7,
        user: null,
        rating: 4,
        book: 'console_wars',
      },
      {
        id: 8,
        user: 'kent_dodds',
        rating: 5,
        book: 'console_wars',
      },
    ],
    description:
      'Following the success of The Accidental Billionaires and Moneyball comes Console Wars a mesmerizing, behind-the-scenes business thriller that chronicles how Sega, a small, scrappy gaming company led by an unlikely visionary and a team of rebels, took on the juggernaut Nintendo and revolutionized the video game industry. In 1990, Nintendo had a virtual monopoly on the video game industry. Sega, on the other hand, was just a faltering arcade company with big aspirations and even bigger personalities. But that would all change with the arrival of Tom Kalinske, a man who knew nothing about videogames and everything about fighting uphill battles. His unconventional tactics, combined with the blood, sweat and bold ideas of his renegade employees, transformed Sega and eventually led to a ruthless David-and-Goliath showdown with rival Nintendo. The battle was vicious, relentless, and highly profitable, eventually sparking a global corporate war that would be fought on several fronts: from living rooms and schoolyards to boardrooms and Congress. It was a once-in-a-lifetime, no-holds-barred conflict that pitted brother against brother, kid against adult, Sonic against Mario, and the US against Japan. Based on over two hundred interviews with former Sega and Nintendo employees, Console Wars is the underdog tale of how Kalinske miraculously turned an industry punchline into a market leader. Its the story of how a humble family man, with an extraordinary imagination and a gift for turning problems into competitive advantages, inspired a team of underdogs to slay a giant and, as a result, birth a $60 billion dollar industry.',
  }
  ```
