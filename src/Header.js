import image from "./assets/image.jpg";
import Bubble from "./Bubble";
import { useState } from 'react';


const Header = () => {

    const [isHovered, setIsHovered] = useState(false);

    //handlers to add to the "post" button to make britney appear
    const handleMouseOn = () => {
        setIsHovered(true);
    }

    const handleMouseOff = () => {
        setIsHovered(false);
    }


    return (
        <div className="wrapper">
            <h1 className="header">Backstreet Chat, Alright!</h1>
            <div className="pictureContainer">
                <img src={image}
                    alt="pictire of the backstreet boys looking sharp"
                    onMouseEnter={handleMouseOn}
                    onMouseLeave={handleMouseOff} />
            </div>
            <div>
                <Bubble isHovered={isHovered} />
            </div>
            <h2 className="topic">What's your fondest memory of the 90's?</h2>
        </div>

    )
}

export default Header;