import { useState } from "react"

export const ButtonWithText = () => {

    const [count, setCount] = useState(0) //hook

    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    )
}