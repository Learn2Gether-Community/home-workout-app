import { forYou } from './data'
import { RightArrow } from './Icons'

const Card = () => {
  return (
    <article className="mt-4">
      <div className="flex justify-between px-6 mb-4">
        <h2>CATEGORIES</h2>
        <RightArrow />
      </div>
      <div className="flex flex-1 overflow-auto relative w-full">
        {forYou.map((data, index) => {
          return (
            <div
              key={index}
              className="w-[200px] h-[180px] flex-shrink-0 relative"
            >
              <div className="absolute top-2 right-6 w-fit p-1 bg-white rounded-full">
                <img src="/images/VectorIcon.png" alt="n" />
              </div>
              <div className="absolute bottom-3 left-2 max-w-[50px] text-[12px]">
                <p>{data.text}</p>
              </div>
              <img
                src={data.src}
                alt={data.text}
                className="w-[180px] h-full rounded-lg"
              />
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Card