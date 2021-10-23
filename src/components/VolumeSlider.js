import { useContext } from 'react'
import { VolumeContext } from './Context'

export default function VolumeSlider() {

    const { volume, setVolume } = useContext(VolumeContext)
    
    return (
        <div className="row">
            <input type="range" className="form-range" min="0" max="1" step="0.05" value={volume} id="volume-slider" onChange={
                (e) => {
                    setVolume(e.target.value)
                }
            }/>
        </div>
    )
}
