import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center  ">
      <img className=" rounded-full object-cover w-[120px] h-[120px] " src={imgURL} alt = {customerName} />
      <p className="info-text max-w-sm text-center mt-6 ">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5 ">
        <img className="object-contain m-0" src={star} alt="rating" width={24} height={24} />
        <p className=" text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
