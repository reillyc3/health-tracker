import { Link, routes } from '@redwoodjs/router'
const NavLayout = ({ children }) => {

  return (
    <>
      <header>
      <Link to={routes.home()}><h1>Health Tracker</h1></Link>
        <nav>
          <ul>
          <li>
              <Link to={routes.dashboard()}>Dasboard</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.newPost()}>New Health Entry</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NavLayout
