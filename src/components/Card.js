import React from 'react'
import { Link } from 'react-router-dom'
import Backup from '../assets/images/backup.png'

export const Card = ({movie}) => {
    const {id, original_title, overview,poster_path} = movie;
    const image = poster_path ? `http://image.tmdb.org/t/p/w500/${poster_path}` : Backup;
  return (
    <div className="max-w-sm bg-white border border-stone-200 shadow dark:bg-mybgc dark:border-myaltyel mx-auto my-5">
            <Link to={`/movie/${id}`}>
                <img className="" src={image} alt="" />
            </Link>
            <div className="p-5">
                <Link to="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
                {/* <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-myyel hover:bg-myaltyel focus:ring-4 focus:outline-none focus:ring-myaltyel dark:bg-myyel dark:hover:bg-myaltyel dark:focus:ring-myyel">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link> */}
            </div>
        </div>
  )
}
// http://image.tmdb.org/t/p/w500/