import { Link, routes } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout/NavLayout'
import { ReactComponent as heathly } from 'src/images/undraw_healthy_options.svg'

const HomePage = () => {
  return (
    <NavLayout>
      <body>
        <div className="my-0 pt-0 bg-red-400">
          <section className="grid grid-cols-2 gap-7 container mx-auto flex justify-between bg-gray-500">
            <div className="border-black border">
              <h1 className="text-blue-500 font-extrabold font-sans text-4xl">
                Start tracking your health
              </h1>
              <p className="text-yellow-500 font-extrabold font-sans text-xl">
                The best way to see your health trends over time
              </p>
              <button className="bg-blue-500 text-white  rounded-full py-2 px-6 leading-relaxed">
                Pre Order
              </button>
            </div>
            <div className="border-black border">
              <img src={heathly} alt="health options pic" />
            </div>
          </section>
        </div>
      </body>
    </NavLayout>
  )
}

export default HomePage
