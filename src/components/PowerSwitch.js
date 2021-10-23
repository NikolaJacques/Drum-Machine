import { useContext } from 'react'
import { PowerContext } from './Context'
import Toggle from './Toggle'

export default function PowerSwitch() {

    const { changePower } = useContext(PowerContext)
    
    return (
        <div className="row">
            <Toggle id="power-switch" label='Power' action={changePower} checked={true}/>
        </div>
    )
}
