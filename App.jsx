import Dice from "./Dice"
import { useState } from "react"

export default function App(){

    const [ diceValues, setDiceValues ] = useState(generateAllNewDice())

    function generateAllNewDice(){
        const arr = []
        for(let i = 0; i < 10; i ++){
            arr.push(Math.floor(Math.random() * 6) + 1);
        }
        return arr
    }

    function rollDice(){
        setDiceValues(generateAllNewDice())
    }


    return(
        <main>
            <div className="dice-container">
                {diceValues.map((value, index) => (
                    <Dice key={index} value={value} />
                ))}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}