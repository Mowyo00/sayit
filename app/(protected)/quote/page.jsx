'use client'


import React, { useEffect, useState } from 'react'
import QuoteList from '@/components/QuoteList'

const Quotepage = () => {

  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes")
        const data = await response.json()
        setQuotes(data.quotes)
      }
      catch (error) {
        console.log("Error fetching quotes:", error)
      }
      finally {
        setIsLoading(false);
      }
    }
    fetchQuotes()

  }, []);
  if (isLoading) {
    return <div className='font-extrabold flex '>Loading...</div>
  }

  return (
    <div>

      <QuoteList
        quotes={quotes}
      />

    </div>
  )
}

export default Quotepage

