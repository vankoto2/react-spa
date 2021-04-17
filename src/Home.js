import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', autor: 'Mario', id: 1},
        { title: 'My new blog', body: 'lorem ipsum...', autor: 'Mario', id: 2},
        { title: 'My new test', body: 'lorem ipsum...', autor: 'Mario', id: 3},
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Writen by {blog.autor}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;