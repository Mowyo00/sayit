import React from 'react'
 
  import QuotesCard from './QuotesCard'
const QuoteList = ({quotes}) => {
  return (
    <div className=' grid grid-cols-3 gap-4'>
        {quotes.map(quote =>( 

            <QuotesCard 
            
              key={quote.id}
               quote= {quote}
            />


        ))}
        


    </div>
  )
}

export default QuoteList