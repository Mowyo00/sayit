import React from 'react'

const QuotesCard = ({quote}) => {
    const {quote: text,author} = quote;
  return (
    <div className='bg-white rounded-xl p-6 mb-6'>
        <p className='text-blue-800 text-xl mb-20  font-serif uppercase'> {text}</p>
        <h2 className='text-xl  font-bold mt-8 border-t-2 border-gray-400 font-mono uppercase'>{author}</h2>
    </div>
  )
}

export default QuotesCard