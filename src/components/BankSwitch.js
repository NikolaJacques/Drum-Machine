import { useContext } from 'react'
import Toggle from './Toggle'
import { BankContext } from './Context'

export default function BankSwitch() {

    const { changeBank } = useContext(BankContext)
    
    return (
        <div className="row">
            <Toggle id="bank-switch" label='Bank' action={changeBank}/>
        </div>
    )
}
