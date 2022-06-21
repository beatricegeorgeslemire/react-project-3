
import firebase from './firebase';
import { ref, push, getDatabase } from "firebase/database";
import { useState } from "react";


const Form = () => {

    const [userInput, setUserInput] = useState("");
    const [userName, setUserName] = useState("");
    const [userTitle, setUserTitle] = useState("");

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
        const database = getDatabase(firebase);
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
            <div className="wrapper flexContainer">
                <form action="submit">
                    <div>
                        <label htmlFor="name">What's Your Name?</label>
                        <input
                            className="name"
                            type="text"
                            id="name"
                            placeholder="Nick Carter"
                            onChange={handleNameChange}
                            value={userName} />
                        <label htmlFor="title">What's your post about?</label>
                        <input
                            placeholder="We were the best band"
                            className="title"
                            type="text"
                            id="title"
                            onChange={handleTitleChange}
                            value={userTitle} />
                    </div>

                    <div>
                        <label htmlFor="comment"></label>
                        <textarea
                            placeholder="You are, my fire. The one, desire. Believe, when I say, I want it that way."
                            className="textarea"
                            name="comment" id="comment"
                            cols="100"
                            rows="10"
                            onChange={handleInputChange}
                            value={userInput}
                        ></textarea>
                    </div>
                    <div className="buttonContainer">
                        <button onClick={handleSubmit} className="button">Post</button>
                    </div>

                </form>
            </div>

        </section>

    )
}

export default Form;