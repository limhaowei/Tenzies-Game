
export default function Dice(props){
    const styles={
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <button 
            onClick={() => props.hold(props.id)} 
            //onClick={props.hold}
            style={styles}
        >{props.value}</button>
    )
}