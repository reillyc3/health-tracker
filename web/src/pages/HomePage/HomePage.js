import { Link, routes } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout/NavLayout'
import { ReactComponent as heathly } from 'src/images/undraw_healthy_options.svg'

const HomePage = () => {
  return (
    <NavLayout>
      <body>
        <div className="relative overflow-hidden px-20 pb-6">
          <section className="">
            <div class="flex flex-col md:flex-row items-center pt-32 pb-16 md:pb-0">
            <div class="md:w-1/2 lg:w-1/3 mb-4 sm:mb-16 md:mb-0">
          <h2 class="text-blue-500 text-xl font-bold text-secondary-500 uppercase mb-2">Make the change</h2>
          <h1 class="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6 md:mb-10">Start Tracking Your Health</h1>
          <a href="#" class="text-blue-500 bg-primary px-0 md:px-0 py-3 md:py-4 text-lg md:text-xl text-secondary font-bold uppercase rounded hover:bg-primary-400">Sign Up Today</a>
        </div>
        <div class="mt-16 sm:mt-0 flex-1 flex justify-end">
          <img calss="scale-100" src="../src/images/undraw_healthy.svg"></img>
        </div>
        </div>
          </section>
        </div>

      </body>
    </NavLayout>
  )
}

export default HomePage
