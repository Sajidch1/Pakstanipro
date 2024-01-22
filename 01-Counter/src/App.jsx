import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Counter with React</h1>
      <div className="card">
      <button onClick={() => setCount ((count) => count -1)}>
          <b>-</b>

        </button>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          <b>+</b>
        </button>
        
        
      </div>
      
    </>
  )
}

export default App
