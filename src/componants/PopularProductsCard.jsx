import { star } from "../assets/icons"


const PopularProductsCard = ({imgURL , name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
   <img src={imgURL} alt={name} width={280} height={280}/>
   <div className="mt-5 flex justify-start gap-2.5 ">
   <img src={star} alt="rating" width={24} height={24}/>
   <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
    </div>
    <h3 className="font-palanquin text-2xl mt-1.5 leading-normal">{name}</h3>
    <p className="mt-1.5 font-semibold font-montserrat text-xl text-coral-red leading-normal ">{price}</p>
    </div>
  )
}

export default PopularProductsCard
