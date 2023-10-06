import { useState } from 'react'
import Card from './Card'
import Message from './Message'
import './app.css'

const data = [
  {
    value: 1,
    selected: false
  },
  {
    value: 2,
    selected: false
  },
  {
    value: 3,
    selected: false
  },
  {
    value: 4,
    selected: false
  },
  {
    value: 5,
    selected: false
  },
]

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