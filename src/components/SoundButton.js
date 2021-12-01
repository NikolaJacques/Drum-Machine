import { VolumeContext, EventContext, KeyContext } from './Context'
import { useContext, useRef, useEffect } from 'react'

export default function SoundButton({id, name, src}) {

    const { volume } = useContext(VolumeContext)
    const { playEventHandler } = useContext(EventContext)
    const { key, setKey } = useContext(KeyContext)
    const audioElement = useRef(null)
    
    useEffect(() => {
        audioElement.current.volume = volume
    }, [volume])
    
    useEffect(() => {
        const parent = audioElement.current.parentElement
        if(parent.id===key[0]||parent.id.toUpperCase()===key[0]){
            playEventHandler(audioElement.current, name)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key])

    return (
        <button className="drum-pad btn fw-bold"
                id={id}
                onClick={() => setKey([...id])}>
            {id.toUpperCase()}
            <audio className="clip" ref={audioElement} src={src} id={id.toUpperCase()} type="audio/mpeg" />
        </button>
    )
}