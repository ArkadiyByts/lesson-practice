import { useState } from 'react';
import './App.css'
import { Counter }   from './components/Counter/Counter';

function App() {
  const [step, setStep] = useState(5)


  return (
    <>
      <input value={step} onChange={e => setStep(Number(e.target.value))} />
      <Counter initialValue={0} step={step} setStep={setStep} />
    </>
  )
}

export default App