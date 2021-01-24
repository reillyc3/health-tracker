import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const NavLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <>
      <header className="m-0">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-0">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
              <li className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
                <Link to={routes.home()}>
                  <h1 className="">Health Tracker</h1>
                </Link>
              </li>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div
              className="lg:flex flex-grow items-center"
              id="example-navbar-warning"
            >
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                {isAuthenticated && (
                  <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <Link to={routes.dashboard()}>Dasboard</Link>
                  </li>
                )}

                <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <Link to={routes.about()}>About</Link>
                </li>
                <li className="nav-item ml-3 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 border-white-300 border-4">
                  <button
                    className="font-bold"
                    onClick={isAuthenticated ? logOut : logIn}
                  >
                    {isAuthenticated ? 'LOG OUT' : 'LOG IN'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NavLayout
