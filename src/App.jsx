import { useState } from 'react'
import Card from './Card'
import Message from './Message'
import './app.css'

const data = [...Array(5)].map((_, idx) => {
  return { value: (idx + 1), selected: false }
})

const App = () => {
  const [ratings, setRatings] = useState(data)
  const [submit, setSubmit] = useState(false)

  const handleRating = value => {
    const newRatings = [...data].map(rating => {
      return rating.value === value
        ? { ...rating, selected: true }
        : { ...rating }
    })
    setRatings(newRatings)
  }

  const handleSubmit = () => {
    setSubmit(!submit)
  }

  const rating = ratings.find(rating => {
    return rating.selected
  })?.value || 0

  return (
    <>
      {!submit
        ? <Card
          ratings={ratings}
          handleRating={handleRating}
          handleSubmit={handleSubmit}
        />
        : <Message rating={rating} />
      }
    </>
  )
}

export default App