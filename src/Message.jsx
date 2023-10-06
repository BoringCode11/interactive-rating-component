import thanksIllustration from './assets/images/illustration-thank-you.svg'

const Message = ({ rating }) => {
  return <section className='card message'>
    <img src={thanksIllustration} alt="illustration" />
    <p className='final-rating'>You have selected {rating} of 5</p>
    <h3>Thank you!</h3>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch </p>
  </section>
}

export default Message