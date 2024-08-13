
const Button = ({label, iconURL, backgroundColor,
  textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 rounded-full font-montserrat leading-none border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 
    ${
    backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} `:
     " border-coral-red bg-coral-red text-white  hover:bg-indigo-500 hover:border-none "} ${fullWidth && "w-full"} `}>
       {label}
       { iconURL && (
        <img 
        src={iconURL}
        alt="arrow right"
        className="ml-2 rounded-full w-5 h-5"
       /> 
       )}
    </button>
  )
}

export default Button
