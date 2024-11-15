import { useState } from "react"

const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard (){
    const [data, setData]= useState(gameBoard)

    function handelSelected(rowIndex, colIndex){
        setData( (innerData)=> {
            const updatedData = [...innerData.map(item => [...item])]
            updatedData[rowIndex][colIndex] = 'X'
            return updatedData
        })
    }

    return(
        <>
            <ol id="game-board">
                {data.map((row, rowIndex) =>
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) =>
                                <li key={colIndex}>
                                    <button 
                                        onClick={() => handelSelected(rowIndex,colIndex)}
                                        >{playerSymbol}
                                    </button>
                                </li>
                             )}
                        </ol>
                    </li>
                 )}
            </ol>
        </>
    )
}