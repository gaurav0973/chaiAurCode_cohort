import React, { useState } from 'react'

function ColorBar() {
  // Initial background color
  const [bgColor, setBgColor] = useState('bg-gray-900')

  // Individual functions (like you wanted)
  const changeToRed = () => {
    setBgColor('bg-red-500')
  }

  const changeToBlue = () => {
    setBgColor('bg-blue-500')
  }

  const changeToGreen = () => {
    setBgColor('bg-green-500')
  }

  const changeToYellow = () => {
    setBgColor('bg-yellow-400')
  }

  const changeToPurple = () => {
    setBgColor('bg-purple-600')
  }

  return (
    <div className={`${bgColor} min-h-screen text-white`}>
      <nav className='p-4 flex justify-center'>
        <button onClick={changeToRed} className='border-2 m-2 rounded-md bg-red-500 px-4 py-2'>Red</button>
        <button onClick={changeToBlue} className='border-2 m-2 rounded-md bg-blue-500 px-4 py-2'>Blue</button>
        <button onClick={changeToGreen} className='border-2 m-2 rounded-md bg-green-500 px-4 py-2'>Green</button>
        <button onClick={changeToYellow} className='border-2 m-2 rounded-md bg-yellow-400 px-4 py-2 text-black'>Yellow</button>
        <button onClick={changeToPurple} className='border-2 m-2 rounded-md bg-purple-600 px-4 py-2'>Purple</button>
      </nav>
    </div>
  )
}

export default ColorBar
