import { useContext, useEffect } from 'react'
import BankSwitch from './BankSwitch'
import Display from './Display'
import PowerSwitch from './PowerSwitch'
import VolumeSlider from './VolumeSlider'
import { PowerContext } from './Context'

export default function ConsolePanel() {

    const inputElements = document.querySelectorAll('input')
    const { power } = useContext(PowerContext)
    
    useEffect(() => {
        inputElements.forEach(element => element.id!=='power-switch'?element.disabled=!power:null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [power])
    
    return (
        <div className="col-xl-6 d-flex flex-column align-items-center spacer-utility py-2 px-5">
            <PowerSwitch />
            <Display />
            <VolumeSlider />
            <BankSwitch />
        </div>
    )
}
