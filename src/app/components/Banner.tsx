import Image from "next/image";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import {PlayIcon} from "@heroicons/react/24/solid";
import { Movie } from "../types/movie";
import Link from "next/link";


export default function Banner({movie}: {movie: Movie}){


    return (
        <div className="mb-10">
            <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] justify-end lg:pb-12'>
                <div className='absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black'>
                    <video
                        autoPlay
                        loop
                        muted
                        poster={movie.bannerFileURL}
                        src={movie.videoFileURL}
                        className="z-20 hidden h-full w-full object-cover opacity-80 transition duration-1000 ease-in-out lg:block"
                    />
                    <Image 
                        src={movie.bannerFileURL}
                        alt={movie.title}
                        fill={true}
                        className='object-cover object-top opacity-30 filter lg:hidden'
                    />
                </div>

                <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
                    {movie.title}
                </h1>

                <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
                    {movie.description}
                </p>
            </div>

            <div className='flex space-x-3'>
                <button >
                    <Link href={`/watch/${movie.id}`} className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
                        <PlayIcon className='h-6' />
                        Play
                    </Link>
                </button>

                <button className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
                    <InformationCircleIcon className='h-6' />
                    More Info
                </button>
            </div>
        </div>
    );
}