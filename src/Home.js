import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', autor: 'Mario', id: 1},
        { title: 'My new blog', body: 'lorem ipsum...', autor: 'Mario', id: 2},
        { title: 'My new test', body: 'lorem ipsum...', autor: 'Mario', id: 3},
    ]);

    return (
        <div className="home">
            <h2>All Blogs</h2>
            <BlogList blogs={blogs} />
        </div>
    );
}

export default Home;