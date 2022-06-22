
import firebase from './firebase';
import { ref, push, getDatabase } from "firebase/database";
import { useState } from "react";
import Britney from './Britney';


const Form = () => {

    const [userInput, setUserInput] = useState("");
    const [userName, setUserName] = useState("");
    const [userTitle, setUserTitle] = useState("");
    const [isHovered, setIsHovered] = useState(false);

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

        //create a reference to the database
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        //push the value of userInput state to the database
        push(dbRef, comment);

        //clear the userinput to reset to an emty string
        setUserInput('');
        setUserName('');
        setUserTitle('');
    }

    //handlers to add to the "post" button to make britney appear
    const handleMouseOn = () => {
        setIsHovered(true);
    }

    const handleMouseOff = () => {
        setIsHovered(false);
    }


    return (
        <section>
            <div>
                <div className="wrapper flexContainer">
                    <form action="submit" onSubmit={handleSubmit}>
                        <div className="inputFlex">
                            <label htmlFor="name">What's Your Name?</label>
                            <input
                                required
                                className="name"
                                type="text"
                                id="name"
                                placeholder="Nick Carter"
                                onChange={handleNameChange}
                                value={userName} />
                            <label htmlFor="title">What's your post about?</label>
                            <input
                                required
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
                                required
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
                            <button
                                className="button"
                                onMouseEnter={handleMouseOn}
                                onMouseLeave={handleMouseOff}
                            >Post</button>
                        </div>

                    </form>
                </div>
                <Britney isHovered={isHovered} />
            </div>
        </section>

    )
}

export default Form;