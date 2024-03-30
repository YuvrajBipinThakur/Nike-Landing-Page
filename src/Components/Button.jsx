
const Button = ({label, iconUrl , backgroundColor , borderColor , textColor}) => {
  return (
    <div>
      <button className={`flex jusify-center items-center 
      gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} ` 
      :
       ` bg-coral-red  text-white border-coral-red` }
     `}>
        {label}
        {iconUrl && <img src= {iconUrl} alt ={label} className="ml-2 rounded-full w-5 h-5"/>}
        
      </button>
    </div>
  )
}

export default Button
