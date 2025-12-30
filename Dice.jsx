
export default function Dice(props){
    const styles={
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <button 
            onClick={() => props.hold(props.id)} 
            //onClick={props.hold}
            style={styles}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
            aria-pressed={props.held}
        >{props.value}</button>
    )
}