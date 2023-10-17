import React, { useState } from 'react'

const Number = ({number, puzzle, row, col, index}) => {
    const [isValid, setIsValid] = useState(true);

    const checkIfValid = (e) => {
        if(e.target.value) {
            const userInput = parseInt(e.target.value)
            // Check box
            if (puzzle[row][col].indexOf(userInput) > -1) {
                return false
            }
            // Check column
            const indicesToCheck = [index, (index + 3) % 9, (index + 6) % 9]
            for (let rowToCheck = 0; rowToCheck < 3; rowToCheck++) {
                for (let indexToCheck of indicesToCheck) {
                    let foundVal = puzzle[rowToCheck][col][indexToCheck]
                    if (foundVal !== '' && foundVal === userInput) {
                        return false
                    }
                }
            }

            // Check row
            let rowIndicesToCheck
            if(index > 5 ) {
                rowIndicesToCheck = [6,7,8]
            } else if( index > 2) {
                rowIndicesToCheck = [3,4,5]
            } else {
                rowIndicesToCheck = [0,1,2]
            }
            for (let colToCheck = 0; colToCheck < 3; colToCheck++) {
                for (let indexToCheck of rowIndicesToCheck) {
                    let foundVal = puzzle[row][colToCheck][indexToCheck]
                    if (foundVal !== '' && foundVal === userInput) {
                        return false
                    }
                }
            }
            puzzle[row][col][index] = userInput
        } else {
            puzzle[row][col][index] = ''
        }
        return true
    }

    const handleOnChange = (e) => {
        if(checkIfValid(e)) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }

    const input = <input className={'input'} type="text" pattern="\d*" maxLength="1" onChange={handleOnChange}/>

    return <div className={`number ${isValid ? '' : 'invalid'}`}>{number ? number : input }</div>
}

export default Number;