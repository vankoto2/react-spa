import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [language, setLanguage] = useState('JavaScript');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [experience, setExperience] = useState(1);
    const [color, setColor] = useState('#4285F4');
    const [gender, setGender] = useState(String);
    const [phone, setPhone] = useState(String);

    const [isPendig, setIsPendig] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, language, email, date, color, gender, experience, phone };

        setIsPendig(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPendig(false);

            // after submitting the form redirect to home
            history.push('/');

            // if we want the submitting form redirect back to previous page we need to use
            // history.go(-1);
        })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    placeholder="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    type="text"
                    placeholder="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="email">Enter your email:</label>
                <input
                    required
                    placeholder="email"
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
                />
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
                <label>Programing language:</label>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="JavaScript">JavaScript</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="Java">Java</option>
                </select>
                <label>Enter a phone number:</label>
                <small>Format: +359-883-333-888</small>
                <input
                    htmlFor="tel"
                    id="phone"
                    name="phone"
                    placeholder="+359-883-333-888"
                    pattern="\+[0-9]*-[0-9]{3}-[0-9]{3}-[0-9]{3}"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label>Select your favorite color:</label>
                <input
                    id="favcolor"
                    type="color"
                    required
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <label>Select your gender:</label>
                <div
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <input required type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                 </div>
                {!isPendig && <button>Add Blog</button>}
                {isPendig && <button disabled>Addig blog...</button>}
            </form>
        </div>
    );
}

export default Create;