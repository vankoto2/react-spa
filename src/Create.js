const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
                <label>Blog titel:</label>
                <input
                type="text"
                required
                />
                 <label>Blog body:</label>
                <textarea required
                ></textarea>
                <label>Blog author:</label>
                <select>
                    <option value="JavaScript">JavaScript</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="Java">Java</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;