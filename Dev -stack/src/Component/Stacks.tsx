
export interface obj {
  id: string,
  name: string,
  category: string,
  description: string,
  icon: string,
  rating: number,
  difficulty: string,
  badge: string
}

interface prop {
  data: obj,
  handleClick : (stackObj:obj)=>void
}



export default function Stacks({ data,handleClick }: prop) {

  return (
    <>
    
       <div className="w-80 rounded-3xl bg-white border border-gray-100 shadow-lg p-7">
          <div className="flex items-start justify-between mb-6">
            <img className='w-12.5' src={data.icon} />
            <span className="bg-sky-50 text-sky-500 text-sm font-semibold px-4 py-1.5 rounded-full">
              {data.badge}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            {data.name}
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {data.description}
          </p>

          <hr className="border-gray-100 mb-5" />
          <div className="flex items-center justify-between mb-6">
            <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3.5 py-1.5 rounded-lg">
              {data.category}
            </span>
            <span className="text-gray-400 text-sm font-medium">
              {data.difficulty}
            </span>
            <span className="flex items-center gap-1 text-gray-900 font-semibold text-sm">
              <svg
                className="w-4 h-4 text-amber-400 fill-amber-400"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
              </svg>
              {data.rating}
            </span>
          </div>
          <button className="w-full bg-gray-900 hover:bg-gray-800 transition-colors text-white font-semibold text-base py-4 rounded-2xl"
          onClick={()=>handleClick(data)}
          >
            Add to Stack
          </button>
        </div>
    </>
  )
}