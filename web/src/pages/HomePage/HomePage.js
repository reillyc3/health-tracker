import { Link, routes } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout/NavLayout'
import HealthPosts from 'src/components/HealthPostsCell'

const HomePage = () => {
  return <NavLayout>

  <HealthPosts />
  </NavLayout>

}

export default HomePage
