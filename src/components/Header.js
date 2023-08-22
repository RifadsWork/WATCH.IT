import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from '../assets/watchitlogo3.png'
import React from 'react'

export const Header = () => {

  const [hidden, setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || true);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    
    if(darkMode){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
    
  }, [darkMode])


  const activeClass = "text-base block py-2 pl-3 pr-4 text-white bg-myyel rounded md:bg-transparent md:text-myyel md:p-0 md:dark:text-myyel";
  const inActiveClass = "text-base block py-2 pl-3 pr-4 text-stone-900 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-myyel md:p-0 md:dark:hover:text-myyel dark:text-white dark:hover:bg-stone-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-stone-700";


  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();

    return navigate(`/search?q=${queryTerm}`);
  }


  
  return (
    <header>
      <nav className="bg-white border-b-2 border-stone-200 shadow dark:bg-mybgc dark:border-b-myaltyel">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
              <img src={Logo} className="h-10 mr-2" alt="Watchit Logo" />
              <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-stone-200">WATCH IT</span>
          </Link>

            <div id='mobile-nav' className="flex md:order-2">
              <button onClick={() => setDarkMode(!darkMode)} className=" focus:ring-2  focus:ring-myyel focus:ring-offset-4 focus:ring-offset-slate dark:focus:ring-offset-mybgc p-2 mr-4 ">
                 {darkMode ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun text-white" viewBox="0 0 16 16">
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                              </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars" viewBox="0 0 16 16">
                                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                                          </svg>) }
              </button>
              <button onClick={() => setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-stone0 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-200 dark:focus:ring-stone-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-stone0 dark:text-stone-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <form onSubmit={handleSubmit}>
                  <input type="text" id="search-navbar" name="search" className="block w-full p-2 pl-10 text-sm text-stone-900 border border-stone-300 rounded-lg bg-stone focus:ring-myyel focus:border-myyel dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-stone-200 dark:focus:ring-myyel dark:focus:border-myyel" placeholder="Search..." autoComplete="off"/>
                </form>
              </div>
              <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone0 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 dark:text-stone-400 dark:hover:bg-stone-700 dark:focus:ring-stone-600" aria-controls="navbar-search" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
            </div>

            <div className={`${hidden ? "hidden" : ""} items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-search`}>
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-stone0 dark:text-stone-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <form onSubmit={handleSubmit}>
                  <input type="text" id="search-navbar" name="search" className="block w-full p-2 pl-10 text-sm text-stone-900 border border-stone-300 rounded-lg bg-stone focus:ring-myyel focus:border-myyel dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-myyel dark:focus:border-myyel" placeholder="Search..." autoComplete="off"/>
                </form>
              </div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-stone-100 rounded-lg bg-stone md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-stone-800 md:dark:bg-mybgc dark:border-stone-700">
                <li>
                  <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/movie/popular" className={({isActive}) => isActive ? activeClass : inActiveClass} >Popular</NavLink>
                </li>
                <li>
                  <NavLink to="/movie/top" className={({isActive}) => isActive ? activeClass : inActiveClass} >Top Rated</NavLink>
                </li>
                <li>
                  <NavLink to="/movie/upcoming" className={({isActive}) => isActive ? activeClass : inActiveClass} >Upcoming</NavLink>
                </li>
              </ul>
            </div>

        </div>
      </nav>
    </header>
  )
}
