import React  from 'react';
import './App.css'
import BigBox, {makeBox} from './BigBox'
import {getPuzzle} from "./puzzleCreator";

const puzzle = getPuzzle()
const splitPuzzle = makeBox(puzzle)
const puzzleCopy = makeBox(puzzle)
function App() {
  return (
    <>
        {splitPuzzle.map((box, row) => {
            return (<div className={'row'}>
                {box.map((bigRow, col) => {
                    return <BigBox data={bigRow} key={`biggestBox-${row}-${col}`} puzzle={puzzleCopy} row={row} col={col}/>
                })}
            </div>
            )
        })}
    </>
  )
}

export default App
