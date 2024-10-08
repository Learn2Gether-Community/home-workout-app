import { Link } from 'react-router-dom'
import SignOutButton from './SignOutButton'

const Header = () => {
  const isLoggedIn = false
  return (
    <div className="py-6 bg-blue-800">
      <div className="container flex justify-between mx-auto">
        <span className="text-3xl font-bold tracking-tight text-white">
          <Link to="/">Home Workout Fitness Application</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center px-3 font-bold text-white hover:bg-blue-600"
                to="/"
              >
                Subscription Details
              </Link>
              <Link
                className="flex items-center px-3 font-bold text-white hover:bg-blue-600"
                to="/"
              >
                Membership Plan
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center px-3 font-bold text-blue-600 bg-white hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  )
}

export default Header
