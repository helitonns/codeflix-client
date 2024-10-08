import Image from "next/image";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import {PlayIcon} from "@heroicons/react/24/solid";


export default function Banner(){
    return (
        <div className="mb-10">
            <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] justify-end lg:pb-12'>
                <div className='absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black'>
                <Image 
                    src='/banner.png'
                    alt='Maid'
                    fill={true}
                    className='h-[65vh] object-cover object-top lg:h-[95vh]'
                />
                </div>

                <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
                MAID
                </h1>

                <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
                After fleeing an abusive relationsip, a young mother finds a job cleaning as she fights to provide
                for her child and build them a better future.
                </p>
            </div>

            <div className='flex space-x-3'>
                <button className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
                <PlayIcon className='h-6' />
                Play
                </button>

                <button className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
                <InformationCircleIcon className='h-6' />
                More Info
                </button>
            </div>
        </div>
    );
}