import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../componants/Button"


const SpecialOffers = () => {
  return (
    <div>
     <section className="flex justify-betwen items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
        src={offer}
        alt="promotion"
        width={770}
        height={680}
        className="object-contain w-full"
        />
       </div>
      <div  className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
        <span className="text-coral-red">Spacial</span> Offer
        </h2>
        <p className="mt-4 info-text">
        Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
        Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
     <Button label="Shop Now" iconURL={arrowRight}/>
     <Button label="Learn More" 
     backgroundColor = "bg-white"
     borderColor = "border-slate-gray"
     textColor="text-slate-gray"
      />
        </div>
      </div>
     </section>
    </div>
  )
}

export default SpecialOffers
