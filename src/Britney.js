import britney from "./assets/britney-png.png";

const Britney = (props) => {

    return (
        <div className={props.isHovered ? "show" : "hidden"} >
            <img src={britney} alt="old school britney looking snazzy" />
        </div >
    )
}

export default Britney;