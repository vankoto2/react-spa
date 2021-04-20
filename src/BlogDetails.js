import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div  className="blog-details" >
            { isPending && <div>Loading...</div>}
            { error && <div>{error} </div>}
            { blog && (
                <article style={{ borderColor:  blog.color }}>
                    <h2>{blog.title}</h2>
                    <p>Programing language {blog.language}</p>
                    <div>{blog.body}</div>
                    <div>Experience: {blog.experience} years</div>
                    <div>Email: {blog.email}</div>
                    <div>Phone: {blog.phone}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;