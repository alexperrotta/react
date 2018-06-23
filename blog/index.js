// h1 - main title
// h2 - blog title
// p - blog content
// h6 - author

const blogs = [
    { title: 'Learning React', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum mi vitae nulla laoreet ultrices. Aenean suscipit diam venenatis accumsan sollicitudin.', author: 'Jermaine Garrett' },
    { title: 'Learning Redux', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum mi vitae nulla laoreet ultrices. Aenean suscipit diam venenatis accumsan sollicitudin.', author: 'Eugene Reed' },
    { title: 'Learning JavaScript', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum mi vitae nulla laoreet ultrices. Aenean suscipit diam venenatis accumsan sollicitudin.', author: 'Hilda Wright' },
];

let h = React.createElement;

let container = h('div', null, [
    h('h1', null, 'My Blog'),
    blogs.map(blog =>
        h('li', null, [  // the function can only return one thing, the li can have multiple children
            h('h2', null, blog.title),
            h('p', null, blog.content),
            h('h4', null, blog.author),
        ])
    ),
    
]);


    ReactDOM.render(
        container, 
        document.querySelector('.react-root')
    );