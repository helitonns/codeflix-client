import MovieCard from "./MovieCard";


type MovieProps = {
    sectionTitle : string;
}

export default function MovieRow({sectionTitle} : MovieProps){
    return (
        <div className='flex-col space-y-4'>
            <div>
                <h2 className='mt-3 -ml-2 inline-flex items-center text-2xl font-bold'>
                {sectionTitle}
                </h2>
            </div>
            <div className='flex space-x-4 overflow-x-scroll scrollbar-hide'>
                {[1,2,3,4,5,1,2,3,4,5].map((index)=>(
                    <MovieCard key={index} index={index} />
                ))}
            </div>
    </div>
    );
}


