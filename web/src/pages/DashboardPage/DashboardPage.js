import { Link, routes } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout'

const DashboardPage = () => {
  return (
    <NavLayout>
    <>
      <h1>DashboardPage</h1>
      <p>
        My default route is named <code>dashboard</code>, link to me with `
        <Link to={routes.dashboard()}>Dashboard</Link>`
      </p>
    </>
    </NavLayout>
  )
}

export default DashboardPage
