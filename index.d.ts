declare module 'books-mock-api' {
  export interface User {
    id: string;
    name: string;
    avatarURL: string;
    reviews: Review[];
    checked_out: string;
  }
  
  export interface Review {
    id: number;
    user: string;
    rating: number;
    book: string;
  }
  
  export interface Book {
    id: string;
    title: string;
    author: string;
    image: string;
    checked_out: string;
    reviews: Review[];
    description: string;
  }  

  interface api {
    getUsers: () => Promise<User[]>,
    getBooks: () => Promise<Book[]>,
    createBook: ( book: Book ) => Promise<Book>,
    updateBook: ( book: Book ) => Promise<Book>
  }

  const Api: api;
  export default Api;
}
