import database from "./firebase";
import { ref, push } from "firebase/database";
import { useState } from "react";


const Form = () => {

    const [userInput, setUserInput] = useState("");
    const [userName, setUserName] = useState("");
    const [userTitle, setUserTitle] = useState("");

    console.log(userInput, userName, userTitle);

    const comment = {
        "input": userInput,
        "name": userName,
        "title": userTitle
    }

    //handling the user typing in the input
    //when the user types in the input box:
    //grab the contents and set it to the userInput variable
    const handleNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleTitleChange = (event) => {
        setUserTitle(event.target.value);
    }

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }

    //Event handler for when the user clicks "post"
    const handleSubmit = (event) => {
        event.preventDefault();

        //create a reference tot he database
        // const database = getDatabase(app);
        const dbRef = ref(database);

        //push the value of userInput state to the database
        push(dbRef, comment);

        //clear the userinput to reset to an emty string
        setUserInput('');
        setUserName('');
        setUserTitle('');
    }



    return (
        <section>
            <form action="submit">
                <label htmlFor="name">What's Your Boyband name?</label>
                <input
                    type="text"
                    id="name"
                    onChange={handleNameChange}
                    value={userName} />
                <label htmlFor="title">What's your post about?</label>
                <input
                    type="text"
                    id="title"
                    onChange={handleTitleChange}
                    value={userTitle} />
                <label htmlFor="comment"></label>
                <textarea
                    name="comment" id="comment"
                    cols="30"
                    rows="10"
                    onChange={handleInputChange}
                    value={userInput}
                ></textarea>
                <button onClick={handleSubmit}>Post</button>
            </form>
        </section>

    )
}

export default Form;