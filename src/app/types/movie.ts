

export type Movie = {
    id: number;
    title: string;
    description: string;
    yearlaunched: string;
    link: string;
    castMember: string[];
    genres: string[];
    thumbFileURL: string;
    bannerFileURL: string;
    videoFileURL: string;
    rating: string;
};

export type Movies = Movie[];