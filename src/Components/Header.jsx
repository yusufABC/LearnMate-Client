import { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaTachometerAlt, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()
const {user,handleSignOut}=use(AuthContext)
// const navigate=useNavigate()
  return (
    <nav className="sticky top-0 z-40 bg-slate-50 shadow dark:bg-gray-800 font-poppins">
      <div className="container px-6  mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                className="w-auto h-15 "
                src='logo.png'
                alt="Logo"
              />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">

         
            {
              user ?<>

                                      <NavLink to={'/'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`

                            }>  Home</NavLink>


             <NavLink to={'/findCourse'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                            }> Find Course</NavLink>


             <NavLink to={'/allcourses'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                            }> All Course</NavLink>
                           <NavLink to={'/addCourse'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                      }>  Add Course</NavLink>
                        <NavLink to={'/myEnrollment'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                      }>  My Enrolled Courses</NavLink>
                        <NavLink to={'/manageCourse'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                      }>  Manage Course</NavLink>
                      
   
              </>:
               <>
                  

                           <NavLink to={'/'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`

                            }>  Home</NavLink>


             <NavLink to={'/findCourse'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                            }> Find Course</NavLink>


             <NavLink to={'/allcourses'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                            }> All Course</NavLink>
              </>
            }


            
          
              
           
         
              
        
            </div>
 <div className="flex items-center mt-4 lg:mt-0">
              {
                user ?

                  ''
                  :
                  <>

                    <button
                      className="btn hidden mx-2 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                      aria-label="show notifications" onClick={() => navigate('/signin')}
                    >
                      Join us
                    </button>

                  </>
              }
              <div className="relative group">
                <div className="relative inline-block text-left">
                  {/* Profile Icon/Button */}
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="User Avatar"
                        src={
                          user?.photoURL ||
                          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Dropdown Content */}
                  {isOpen && (
                    <div className="absolute text-2xl right-0 mt-2 w-56 bg-base-200 rounded-lg shadow-xl z-50 transition-all duration-200 py-2">
                      {/* User Name */}
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-300">
                        <FaUser className="text-gray-500" />
                        <p className="text-sm font-medium text-gray-800">
                          {user?.displayName || 'Unknown'}
                        </p>
                      </div>

                      {/* Dashboard Link */}
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-base-300 transition"
                      >
                        <FaTachometerAlt className="text-gray-500" />
                        Dashboard
                      </Link>
                      <Link
                        to="/MyProfile"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-base-300 transition"
                      >
                        <FaTachometerAlt className="text-gray-500" />
                        My Profile
                      </Link>

                      {/* Logout Button */}
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-base-300 transition"
                      >
                        <FiLogOut className="text-red-500" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
