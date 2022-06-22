import bubble from "./assets/speech-bubble.png";

const Bubble = (props) => {

    return (
        <div className={props.isHovered ? "showBubble" : "hideBubble"}>
            <img src={bubble} alt="speech bubble saying hey" />
        </div>
    )
}

export default Bubble;