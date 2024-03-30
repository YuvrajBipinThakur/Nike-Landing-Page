import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import {offer} from '../assets/images'
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt= 'offer' width={773} height={687} className='object-contain w-full' />
      </div>
      <div className="flex flex-1 flex-col">
        
        <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className='text-coral-red '> Special</span> Offer
          
        </h2>
        <p className='lg:max-w-lg mt-4 info-text'>
         Embark on a shopping journey that redefines your experience with unbeatable deals. 
         From premium selections to incredible savings,we offer unparalleled value that sets us apart
        </p>
        <p className="lg:max-w-lg info-text mt-6">
         Navigate a realm of possibilities to fulfill your unique desires.Surpassing the loftiest expectations. 
         Your journey with is is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button  label='Shop Now' iconUrl={arrowRight} />
        <Button label="Learn More" backgroundColor = "bg-white" borderColor = "border-slate-gray" textColor = 'slate-gray'/>
        </div>

      </div>
    </section>
  )
}

export default SpecialOffer
