const BlogList = ({ blogs, handleDelete }) => {



    return (
        <div>
            <h2>All Blogs</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writen by {blog.autor}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;