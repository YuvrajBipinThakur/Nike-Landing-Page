import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
       <img src= {imgURL} alt= {name} className="h-[280px] w-[280px]" /> 
       <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />
        <p className="font-motserrat text-xl text-slate-gray leading-normal">(4.5)</p>
       </div>
       <h3 className="text-2xl font-palanquin leading-normal mt-2 font-semibold">{name}</h3>
       <p className="mt-2 font-montserrat font-semibold text-2xl leading-normal text-coral-red">{price}</p>
    </div>
    
  )
}

export default PopularProductCard
