import Logo from '../assets/watchitlogo3.png'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-mybgc m-4">
        <div className="w-full max-w-screen-2xl mx-auto p-8 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0">
                    <img src={Logo} className="h-10 mr-3" alt="Watch It Logo" />
                    <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-stone-200">WATCH IT</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-stone0 sm:mb-0 dark:text-stone-300">
                    <li>
                        <a href="https://www.facebook.com/riifaad/" target='_black' rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/riifaad/" target='_black' rel="noreferrer" className="mr-4 hover:underline md:mr-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/CottonCandy.RISH" target='_black' rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Business</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/RiSh.lifestory/" target='_black' rel="noreferrer" className="hover:underline">Personal Vlog</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-stone-200 sm:mx-auto dark:border-stone-700 lg:my-8" />
            <span className="block text-sm text-gray0 sm:text-center dark:text-stone0">© 2023 <a href="/" className="hover:underline">RifadsWork</a>. All Rights Reserved.</span>
        </div>
      </footer>
  )
}
