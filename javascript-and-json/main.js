const books = [
  {
    isbn: '111-1-11-111111-1',
    title: 'How to Garf',
    author: 'Commander Garf',
  },
  {
    isbn: '222-2-22-222222-2',
    title: 'Garf Garf',
    author: 'General Garf',
  },
  {
    isbn: '333-3-33-333333-3',
    title: 'The Origin of Garf',
    author: 'Garfield',
  },
];
console.log('type of books: ', typeof books);
console.log('books: ', books);

const jsonStringBooks = JSON.stringify(books);
console.log('type of jsonStringBooks: ', typeof jsonStringBooks);
console.log('JSON String of books: ', jsonStringBooks);

const id = '"id":12345';
const name = '"name":"Garf"';
const jsonStringStudent = '{' + id + ',' + name + '}';
console.log('type of jsonStringStudent: ', typeof jsonStringStudent);
console.log('JSON String of Student: ', jsonStringStudent);

const json = JSON.parse(jsonStringStudent);
console.log('type of json: ', typeof json);
console.log('json: ', json);
