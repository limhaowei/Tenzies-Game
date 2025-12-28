
export default function Dice(props){
    const styles={
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <button style={styles}>{props.value}</button>
    )
}