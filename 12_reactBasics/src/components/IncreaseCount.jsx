import React, { useState } from 'react'

function IncreaseCount() {
  // states
  const  [count, setCount] = useState(0)

  // setState
  const IncCount = () =>{
    if(count === 10)
        return 
    setCount(count+1)

  }
  

  return (
    <div className='bg-zinc-800 w-full h-screen text-white'>
      <div>Count : {count}</div>
      <div onClick={IncCount} className='bg-blue-500 p-2 w-32 text-center rounded-2xl '>Count++</div>
    </div>
  )
}

export default IncreaseCount

