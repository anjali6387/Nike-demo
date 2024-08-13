import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react"
const Navbar = () => {
    // console.log(navLinks)
    const[open,setOpen] = useState(false)
  return (
   <header className="padding-x py-8 z-10 w-full">
    <nav className="flex justify-between  max-lg:flex-col max-container">
        <a href="/" className="flex">
            <img   
              src={headerLogo} 
              alt = "logo"
              width={130}
              height = {29}
            /> 
        </a>
        <div className="hidden max-lg:block absolute right-8 top-5 cursor-pointer text-3xl" onClick={()=>setOpen(!open)}>
        

           <ion-icon name={open ? "close" : "menu"}></ion-icon> 
         
        </div>
        <ul className={`flex max-lg:flex-col max-lg:gap-10 gap-16 max-lg:mt-10 max-lg:p-10  static max-lg:absolute  max-lg:bg-white max-lg:w-[400px] max-sm:w-full transition-all duration-500 ease-in z-20 max-lg:font-bold ${open ? 'flex': 'max-lg:hidden '} opacity-100 `}>
            {
                navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.hre
                    className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red "
                    >
                  {item.label}
                    </a>
                </li>
                
             ))   
            }
        </ul>


    </nav>
           
  
    
 
   </header>
  )
}

export default Navbar
