import Button from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        
        <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          We Provide you
          <span className='text-coral-red '> Super</span> 
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className='lg:max-w-lg mt-4 info-text'>
         Ensuring premium comfort and style, our meticulously crafted footware is designed to elevate your 
         experience, providing you with unmatched quality, innovation, and a touch od elegance.
        </p>
        <p className="lg:max-w-lg info-text mt-6">
          Our dedication detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
        <Button  label='View details' />
        </div>

      </div>

      <div className="flex flex-1 justify-center item-center">
        <img src={shoe8} alt="shoe" width={570} height={570}/>
      </div>
        
      
    </section>
  )
}

export default SuperQuality
