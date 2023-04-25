import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  var username = localStorage.getItem("username");
  console.log(username);

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <div class="bg-white">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-5xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <div class="flex items-center">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center mr-8"
              >
                <svg
                  class="w-8 text-black"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span class="ml-2 text-xl font-bold tracking-wide text-black uppercase">
                  EDUREX
                </span>
              </a>
              <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    to="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-neutral-700 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-neutral-700 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    aria-label="Product pricing"
                    title="Product pricing"
                    class="font-medium tracking-wide text-neutral-700 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Courses"
                    aria-label="About us"
                    title="About us"
                    class="font-medium tracking-wide text-neutral-700 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Courses
                  </Link>
                </li>
              </ul>
            </div>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/register"
                  aria-label="Sign in"
                  title="Sign in"
                  class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 bg-blue-500 p-4 rounded-md"
                >
                  Sign in / Sign Up
                </Link>
              </li>
              <li></li>
            </ul>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          
              <div class="relative ml-3">
                <div className="flex gap-x-2">
                  <button
                    type="button"
                    class="flex rounded-full bg-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <h1 className="text-gray-300 font-bold ml-4 text-base mt-1">
                      {username}
                    </h1>
                   
                  </button>
                  <p
                      onClick={handleLogout}
                      className="text-base cursor-pointer leading-4 font-semibold border-b border-transparent text-black hover:border-white focus:border-white  "
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

                    </p>
                </div>
              </div>
                        
            </div>

            <div class="lg:hidden z-50">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full z-50">
                  <div class="p-5 bg-white border rounded shadow-sm z-50">
                    <div class="flex items-center justify-between mb-4 z-50">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <svg
                            class="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            EDUREX
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4 z-50">
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Profile
                          </a>
                        </li>
                        <li>
                          <Link
                            to="/courses"
                            aria-label="About us"
                            title="About us"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/register"
                            aria-label="Sign in"
                            title="Sign in"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Sign in / Sign Up
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
