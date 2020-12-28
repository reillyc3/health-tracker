import { Link, routes } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout/NavLayout'
import HealthPostsCell from 'src/components/HealthPostsCell'

const HomePage = () => {
  return (
    <NavLayout>
      <HealthPostsCell />
    </NavLayout>
  )
}

export default HomePage
