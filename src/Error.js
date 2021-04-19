import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="not-foud">
            <h2>Sorry</h2>
            <p>Page not found</p>
            <Link to="/">Back to homepage...</Link>
        </div>
    );
}

export default Error;