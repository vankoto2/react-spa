import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('Title');
    const [body, setBody] = useState('text');
    const [language, setLanguage] = useState('JavaScript');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [experience, setExperience] = useState(1);
    const [color, setColor] = useState('#ff0000');
    const [gender, setGender] = useState('Male');
    const [typer, setTyper] = useState('Male');

    const [isPendig, setIsPendig] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, language, email, date, color, gender, typer, experience };

        setIsPendig(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPendig(false);

            // after submitting form redirect back to previous page
            history.go(-1);

            // if we want the submitting form to redirect to home we use
            // history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Programing language:</label>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="JavaScript">JavaScript</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="Java">Java</option>
                </select>
                <label htmlFor="email">Enter your email:</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Date:</label>
                <input
                    required
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                ></input>

                <label htmlFor="quantity">Years of experience</label>
                <input
                    required
                    type="number"
                    name="quantity"
                    min="0" max="50"
                    step="1"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                <label for="phone">Enter a phone number:</label>
                <input htmlFor="tel" id="phone" name="phone" placeholder="+359-883-333-888" pattern="\+[0-9]*-[0-9]{3}-[0-9]{3}-[0-9]{3}" required />


                <div
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                 </div>
                <div
                    value={typer}
                    onChange={(e) => setTyper(e.target.value)}
                >
                    <input type="checkbox" name="vehicle" value="Pro" />Pro
                    <input type="checkbox" name="vehicle" value="Noob" />Noob

                 </div>
                <label>Select your favorite color:</label>
                <input
                    type="color"
                    required
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <input type="reset"></input>
                {!isPendig && <button>Add Blog</button>}
                {isPendig && <button disabled>Addig blog...</button>}
            </form>
            <p>{typer}</p>
        </div>
    );
}

export default Create;