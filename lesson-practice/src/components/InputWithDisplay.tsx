import { useState } from "react"

export const InputWithDisplay = () => {

    const [name, setName] = useState('')

    return (
        <>
            <p>{name === 'gymmy' ? name : 'no its not Gymmy'}</p>
      
            <input value={name} onChange={e => setName(e.target.value)}/>
        </>
    )
}