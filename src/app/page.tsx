import Banner from './components/Banner';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import { getFeaturedMovie } from './service/MovieService';

export default async function Home() {
  const featureMovie = await getFeaturedMovie("101");


  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b from-transparent to-black lg:h-[140vh]'>
      
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner movie={featureMovie} />
        <MovieRow sectionTitle='Trending Now' />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Action Movies' />
      </main>
      
    </div>
  );
}
