import React from 'react'
import Button from './Button'

const Counter = ({count, onIncrement, onDecrement}) => {
  return (
    <div className='grid gap-3' >
        Counter:{count}

        <Button
        onClick={onIncrement}
        label="Increment"
        className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"/>


        <Button
        onClick={onDecrement}
        label="Decrement"
         className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        
        />
      
       

        </div>
  )
}

export default Counter