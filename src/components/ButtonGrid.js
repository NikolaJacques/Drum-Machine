import React from 'react'
import SoundButton from './SoundButton'
import { useContext } from 'react'
import { BankContext } from './Context'
import { letterArray } from './LettersArray'

export default function ButtonGrid() {

    const { bank } = useContext(BankContext)
    
    return (
        <div className="col-xl-6 button-grid p-2">
            {bank.map(
                ({soundName,path},index) => <SoundButton key={index} name={soundName} src={path} id={letterArray[index]}/>
            )}
        </div>
    )
}
