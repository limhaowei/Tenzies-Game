import Dice from "./Dice"
import { useState } from "react"

export default function App(){

    const [ diceValues, setDiceValues ] = useState(generateAllNewDice())

    function generateAllNewDice(){
        const arr = []
        for(let i = 0; i < 10; i ++){
            arr.push({value: Math.floor(Math.random() * 6) + 1, isHeld: false})
        }
        return arr
    }


    function rollDice(){
        //setDiceValues(generateAllNewDice())
        setDiceValues(prev => prev.map((item) => 
            item.isHeld ? item : {...item, value: Math.floor(Math.random() * 6) + 1}
        ))
    }

    function hold(id){
        setDiceValues(prev => prev.map((item, index) => 
            index === id ? {...item, isHeld: !item.isHeld} : item
        ))
    }

    return(
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceValues.map((dice, index) => (
                    <Dice 
                        key={index} 
                        id={index}
                        value={dice.value} 
                        isHeld={dice.isHeld} 
                        hold={hold} 
                        //hold={() => hold(dice.id)}
                    />
                ))}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}