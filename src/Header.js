import image from "./assets/image.jpg";


const Header = () => {

    return (
        <div className="wrapper">
            <h1 className="header">Backstreet Chat, Alright!</h1>
            <div className="pictureContainer">
                <img src={image} alt="pictire of the backstreet boys looking sharp" />
            </div>
            <h2 className="topic">What's your best memory of the 90's?</h2>
        </div>

    )
}

export default Header;