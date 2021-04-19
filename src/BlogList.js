import { Link } from "react-router-dom"

const BlogList = ({ blogs, handleDelete }) => {
    return (
        <div>
            <h2>All Blogs</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Programing language: {blog.language}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;