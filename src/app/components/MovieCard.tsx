import Image from "next/image";

type MovieCardProps = {
    index : number;
}

export default function MovieCard({index} : MovieCardProps){
    return (
        <div key={index} className='group h-28 min-w-[200px] relative
        transfor transition duration-200 easein hover:scale-110 hover:z-50
        md:h-40 md:min-w-[380px] lg:h-52 lg:min-w-[400px]
        bg-gradient-to-t from-transparent to-black
        '>
            <Image
                src={`/item_${index}.png`}
                fill={true}
                alt=''
                className='rounded'
            />
        </div>
    );
}