import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../componants/Button"
import ShoeCard from "../componants/ShoeCard"
import { shoes, statistics } from "../constants/index"


const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)
  return (
    <div>
      <section id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2 "
      >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrival</span>
      <br/>
      <span className="inline-block mt-3 text-coral-red">Nike </span> Shoes
      </h1>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover Stylish Nike Arrivals quality Comfort, and Innovation for your active life</p>
      <Button label="Shop Now" iconURL={arrowRight}  />
      
      <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
      {statistics.map((stats)=>(
        <div key={stats.label}>
          <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
          <p className="font-montserrat leading-7 text-slate-gray">{stats.label}</p>
        </div>

      ))}

      </div>
      </div>



      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
   <img src={bigShoeImg} alt="shoe" width={610} height={500}
   className="object-contain relative z-3" />

   <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]max-sm:px-6" >
    {shoes.map((shoe,index)=>(
      <div key={index}> <ShoeCard imgURL={shoe}
        changeBigShoeImg={(shoe)=>{setBigShoeImg(shoe)}}
        bigShoeImg = {bigShoeImg}
      />
      </div>
         
    ))}
   </div>
      </div>

      </section>
    </div>
  )
}

export default Hero
