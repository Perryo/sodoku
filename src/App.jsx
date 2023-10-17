import React  from 'react';
import './App.css'
import BigBox, {makeBox} from './BigBox'

const puzzle = [
    [4, '',6, 2, 7, 8, '','',''],
    [7, 3, 5,'', 9, 6, 2, '',''],
    [8,1,'',5,4,'',7,9,''],
    ['',6,2,'','','',1,'',''],
    [4,'',3,'',6,1,'','',''],
    ['','','',4,'','','','',7],
    ['','','','',1,7,6,'',9],
    [3,'','','',5,'','','',''],
    [6,'','','','',4,2,'',5]
]
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
