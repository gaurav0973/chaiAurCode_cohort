import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = function(){
    if(count === 20)
        return
    setCount(count+1)
  }
  const decreaseCount = function(){
    if(count === 0)
        return
    setCount(count-1)
  }
  return (
    <>
      <h1>Counter Feature</h1>
      
      
      <h2>Count : {count}</h2>
  
      {/* add and remove button */}
      <button onClick={increaseCount}>Add</button>
      <span>{"   "}</span>
      <button onClick={decreaseCount}>Remove</button>
    </>
  )
}

export default App
