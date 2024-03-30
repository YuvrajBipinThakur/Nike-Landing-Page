
import ReviewCard from '../Components/ReviewCard'
import {reviews} from '../Constants'
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className=" text-center text-4xl font-bold font-palanquin"> What our <span className=" text-coral-red"> customers </span> say?</h3>
      <p className=" m-auto text-center info-text max-w-lg mt-4">
        Hear genuine stories fromour satified customers about their exceptional experience with us.
      </p>
      <div className=" flex flex-1 justify-evenly mt-24 items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key = {review.customerName}  {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
