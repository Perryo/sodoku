import React  from 'react'
import Number from './Number'


export const makeBox = (data) => {
    return [data.slice(0,3), data.slice(3,6), data.slice(6)];
}

const BigBox = ({data, puzzle, row, col}) => {
    const rows = makeBox(data)

    return (
        <div className={'bigbox'}>
            {rows.map((element, i) => {
                let index = i * 3 - 1
                return (
                    <div className={'row'}>
                        {element.map((number, i) => {
                            index = index + 1
                            return <Number number={number} key={`${i}-${number}`} puzzle={puzzle} row={row} col={col} index={index}/>
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default BigBox;