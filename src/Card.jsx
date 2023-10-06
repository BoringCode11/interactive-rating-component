import Rating from './Rating'
import starIcon from './assets/images/icon-star.svg'

const Card = ({ ratings, handleRating, handleSubmit }) => {
  return <section className='card'>
    <div className="wrapper">
      <img src={starIcon} alt="star svg icon" />
    </div>
    <h2>How did we do?</h2>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>

    <div className="ratings">
      {ratings.map((rating) => {
        return <Rating key={rating.value} handleRating={handleRating} {...rating} />
      })}
    </div>

    <button
      className='btn'
      onClick={handleSubmit}
    >
      Submit
    </button>
  </section>
}

export default Card