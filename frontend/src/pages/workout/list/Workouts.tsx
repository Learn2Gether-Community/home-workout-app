import { FaArrowLeft } from 'react-icons/fa'
import { workoutList } from '../../../components/data'
import { useNavigate } from 'react-router-dom'

const Workouts = () => {
  const navigate = useNavigate()
  return (
    <section className="p-4 border pt-0 bg-white">
      <article className="h-[60vh] max-h-[280px] relative">
        <img
          src="/images/image-sit.png"
          alt="sit out image"
          className="w-full h-full"
        />
        <div className="flex gap-6 items-center text-[1.5rem] absolute top-0 left-2">
          <FaArrowLeft />
          <h2>ABS BEGINNER</h2>
        </div>
      </article>

      <article className="p-4">
        <div className="my-4 flex gap-4 items-center">
          <h2 className="font-[500] text-[#2C4BA0] text-[24px]">20 mins</h2>

          <div>
            <span className="text-[30px]">.</span>
          </div>
          <p className="font-[500] text-[#2C4BA0] text-[18px] leading-[28px]">
            12 workouts
          </p>
        </div>
        <div className="overflow-auto h-[40vh]">
          {workoutList.map((workout) => {
            const { id, name, source, time } = workout
            return (
              <div key={id} className="flex gap-8 items-center my-2 py-2">
                <div
                  className="w-full max-w-[143px] h-[108px] bg-[#2C4BA026] flex justify-center items-center"
                  onClick={() => navigate(`/workout/${id}`)}
                >
                  <img src={source} alt="id" className="h-full w-full" />
                </div>
                <div className="text-[#343A40] flex flex-col gap-4">
                  <h2 className="font-bold text-[1rem] keading-[24px] ">
                    {name}
                  </h2>
                  <p className="leading-[20px] text-[14px]">{time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </article>

      <div className="p-4 bg-[#F7F9FC] text-white text-center">
        <button className="bg-[#2C4BA0] w-[80%] py-2 rounded-lg">
          Continue
        </button>
      </div>
    </section>
  )
}

export default Workouts
