import Dice from "./Dice"
import { useState } from "react"
import Confetti from "react-confetti"

export default function App(){

    const [ diceValues, setDiceValues ] = useState(generateAllNewDice())

    // We can derive the gameWon status based on the condition(s) of the current dice state on every render.
    // we don't need to create a state for gameWon
    const gameWon = diceValues.every(die => die.isHeld) && diceValues.every(die => die.value === diceValues[0].value)

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
            {gameWon && <Confetti />}
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
            <button className="dice-roll" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}