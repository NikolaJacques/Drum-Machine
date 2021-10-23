import ButtonGrid from './ButtonGrid'
import ConsolePanel from './ConsolePanel'

export default function Container() {
    
    return (
        <div className="row" id="drum-element">
            <ButtonGrid />
            <ConsolePanel />
        </div>
    )
}
