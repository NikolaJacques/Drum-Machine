import { useContext } from 'react'
import { NameContext } from './Context'

export default function Display() {

    const { name } = useContext(NameContext)
    
    return ( 
        <div className="row justify-content-center py-2 display">{name}</div>
    )
}
