const Rating = ({ value, handleRating, selected }) => {
  return <span
    className={`${selected ? 'selected' : ''} rating`}
    onClick={() => handleRating(value)}
  >
    {value}
  </span>
}

export default Rating