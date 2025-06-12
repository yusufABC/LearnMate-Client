import { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const {user}=use(AuthContext)
const navigate=useNavigate()
  return (
    <nav className="relative bg-slate-50 shadow dark:bg-gray-800 font-poppins">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                className="w-auto h-30 "
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
             <NavLink to={'/'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`

                            }>  Home</NavLink>


             <NavLink to={'/signin'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                            }>  Course Details</NavLink>
         



            {
              user ?<>
              
                        <NavLink to={'/addCourse'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                      }>  Add Course</NavLink>
                        <NavLink to={'/editCourse'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                      }>  Edit Course</NavLink>
                        <NavLink to={'/manageCourse'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-blue-400':'text-black'}`
                      }>  Manage Course</NavLink>
              </>
              :''
            }
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
  {
    user ? 
    
    <li className="flex">
                                    <button className='flex items-center px-4 -mb-1 border-b-2 border-transparent rounded'
                                    >Sign Out</button>
                                </li>
                                :
                                <>
    
           <button
                className="btn hidden mx-2 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications" onClick={()=>navigate('/signin')}
              >
               Sign In
              </button>
           <button
                className="btn hidden mx-2 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications" onClick={()=>navigate('/signup')}
              >
               Sign Up
              </button>
    </>
  }

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
