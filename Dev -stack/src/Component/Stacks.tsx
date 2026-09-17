
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
  data: obj[]
}



export default function Stacks({ data }: prop) {

  // function handleClick() {
  //   toast('hello i am all ok')
  // }

  return (
    <>
      {data.map((obj: obj) => {
        return (<div className="w-80 rounded-3xl bg-white border border-gray-100 shadow-lg p-7">
          <div className="flex items-start justify-between mb-6">
            <img className='w-22.5' src={obj.icon} />
            <span className="bg-sky-50 text-sky-500 text-sm font-semibold px-4 py-1.5 rounded-full">
              {obj.badge}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            {obj.name}
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {obj.description}
          </p>

          <hr className="border-gray-100 mb-5" />
          <div className="flex items-center justify-between mb-6">
            <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3.5 py-1.5 rounded-lg">
              {obj.category}
            </span>
            <span className="text-gray-400 text-sm font-medium">
              {obj.difficulty}
            </span>
            <span className="flex items-center gap-1 text-gray-900 font-semibold text-sm">
              <svg
                className="w-4 h-4 text-amber-400 fill-amber-400"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
              </svg>
              {obj.rating}
            </span>
          </div>
          <button className="w-full bg-gray-900 hover:bg-gray-800 transition-colors text-white font-semibold text-base py-4 rounded-2xl"
          >
            Add to Stack
          </button>
        </div>)
      })}
    </>
  )
}