import { shoe8 } from "../assets/images"
import Button from "../componants/Button"


const superQuality = () => {
  return (
    <div>
      <section id="about-us" 
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalized text-4xl lg:max-w-lg font-bold">
          We Provide you <span className="text-coral-red">Super Quality</span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className='mt-11'>
          <Button label = 'View Details' />
          </div>
        </div>
        <div>
          <img 
          src={shoe8}
          alt="product details"
          width = {570}
          height={520}
          className="object-contain"

          />
        </div>
      </section>
    </div>
  )
}

export default superQuality
