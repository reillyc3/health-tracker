import { Link, routes } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout'
import HealthPostsCell from 'src/components/HealthPostsCell'

const DashboardPage = () => {
  return (
    <NavLayout>
      <div className="flex justify-center">
        <Link
          className="border-2 border-blue-500 rounded-full text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6"
          to={routes.newPost()}
        >
          New Entry
        </Link>
      </div>

      <HealthPostsCell />
    </NavLayout>
  )
}

export default DashboardPage
