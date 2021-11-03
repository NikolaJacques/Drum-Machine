import { createContext, useEffect, useState } from 'react'
import { BankObject } from './BankObject'

export const BankContext = createContext()
export const NameContext = createContext()
export const VolumeContext = createContext()
export const PowerContext = createContext()
export const KeyContext = createContext()
export const EventContext = createContext()

export function Context(props) {

    // power
    const [power, setPower] = useState(true)
    const changePower = () => {
        setPower(() => {
            if(power===true){
                setName('')
                return false
            } else {
                return true
        }})
    }
    
    // volume
    const [volume, setVolume] = useState(0.5)
    
    // name
    const [name, setName] = useState('')
    
    // bank
    const [bank, setBank] = useState(BankObject[0])
    const changeBank = () => {
        const index = BankObject.indexOf(bank)===0?1:0
        setBank(BankObject[index])
    }
    
    // key
    const [key, setKey] = useState('')
    
    // event handlers
    const playEventHandler = (element, name) => {
        if(power){
            setName(name)
            element.play()
            .then(() => {
                // highlight button
                element.parentElement.className += ' highlight'
                setTimeout(() => {
                    element.parentElement.className = element.parentElement.className
                        .split(' ')
                        .filter(word => word!=='highlight')
                        .join(' ')
                },250)
            })
            .catch((error) => {
                setName('[error: check logs]')
                console.log(error)})
        }
    }
    
    const setKeyEvent = (e) => {
        setKey([e.key])
    }
    
    useEffect(() => {
        document.addEventListener('keydown', setKeyEvent)
        return () => {
            document.removeEventListener('keydown', setKeyEvent)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key])
    
    return (
        <>
            <PowerContext.Provider value={{power, changePower}}>
            <VolumeContext.Provider value={{volume, setVolume}}> 
            <BankContext.Provider value={{bank,changeBank}}>
            <NameContext.Provider value={{name,setName}}>
            <KeyContext.Provider value={{key,setKey}}>
            <EventContext.Provider value={{playEventHandler}}>
                {props.children}
            </EventContext.Provider>
            </KeyContext.Provider>
            </NameContext.Provider>
            </BankContext.Provider>
            </VolumeContext.Provider>
            </PowerContext.Provider>
        </>
    )
}


