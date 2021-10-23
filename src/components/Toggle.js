import { useRef, useEffect } from 'react'

export default function Toggle({id, label, action, checked}) {

    const toggleInput = useRef(null)
    
    useEffect(() => {
        if (checked===true){toggleInput.current.checked = true}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div className="form-check form-switch">
            <label className="form-check-label" htmlFor={id}>{label}</label>
            <input ref={toggleInput} className="form-check-input" type="checkbox" id={id} onChange={
                () => action()
            }/>
        </div>
    )
}
