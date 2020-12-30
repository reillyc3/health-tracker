import { Link, routes } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout'
import HealthPostsCell from 'src/components/HealthPostsCell'

const DashboardPage = () => {
  return (
    <NavLayout>
      <Link to={routes.newPost()}>New Health Entry</Link>
      <HealthPostsCell />
    </NavLayout>
  )
}

export default DashboardPage
