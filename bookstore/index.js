// Step 1. describe what you want the page to look like
/* <div>
    <h1>Bookstore</h1>
    <ul class="book-list">
        <li>Books are coming soon</li>
    </ul>
    <footer>Copyright 2018</footer>
</div>   */

// <h1>Bookstore</h1>
// $('<h1>', { text: 'Bookstore'})
// $('.react-root').append(element);

// creates an object that includes the info you gave it
// the 2nd argument can be either a class, id or href
// the 3rd argument is the text that goes inside the element


// let title = h('h1', null, 'Bookstore'); 
// let copyright = h('footer', null, 'Copyright 2018'); 
// let bookRow = h('footer', null, 'Books are coming soon!'); 
// let booklist = h('ul', { className: 'book-list' }, bookRow);
// let container = h('div', null, [
//     title, 
//     booklist,
//     copyright,
// ]); 

const books = [
    { title: 'A Tale of Two Cities', author: 'Charles Dickens' },
    { title: 'War and Peach', author: 'Leo Tolstory' },
    { title: 'A Count of Monte Cristo', author: 'Alexandre Dumas' },
    { title: 'The Federalist Papers', author: 'Alexander Hamilton', featured: true },
    { title: 'Common Sense', author: 'Thomas Paine', featured: true },
];

let h = React.createElement;

// take the list of books and generate a list item
// an array of list item of virtual dom
// let bookRows = books.map(book =>
//     h('li', null, book.title + ' by ' + book.author)
// );

// create a component
let BookRow = (book) =>
    h('li', null, book.title + ' by ' + book.author)

let BookList = (props) =>
    h('ul', { className: 'book-list' }, 
        props.books.map(book =>
            h(BookRow, book)
        )
    )


// this is a virtual dom
// let container = h('div', null, [
//     h('h1', null, 'Bookstore'), 
//     h('ul', { className: 'book-list' }, 
//         books.map(book =>
//             h('li', null, book.title + ' by ' + book.author)
//         )
//     ),
//     h('footer', null, 'Copyright 2018'),
// ]); 


let container = h('div', null, [
    h('h1', null, 'Bookstore'), 
    h(BookList, { books: book }),
    h('h2', null, 'Featured'),
    h(BookList, { books: books.filter(book => book.featured) }),
    h('footer', null, 'Copyright 2018'),
]); 


// document.querySelector('.react-root').appendChild(element);
// 1st argument is what element to render
// 2nd arguement is where to put it
ReactDOM.render(
    container, 
    document.querySelector('.react-root')
);




