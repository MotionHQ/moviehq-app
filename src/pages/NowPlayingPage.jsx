import Banner from '../components/Banner';
import { MovieCard } from '../components/MovieCard';

const NowPlayingPage = () => {
    return (
        <div>
            <Banner />
                <div className='bg-gradient-to-r from-neon-red to-neon-blue relative mt-10 md:py-px lg:py-1 text-neon-yellow transition'>
                <h2 className='mono45 text-3xl my-5 text-center'>NOW PLAYING</h2>
                </div>
            <div className='container mx-auto px-3 my-10'>
                <div className='grid-container'>
                    <MovieCard />
                </div>
            </div>
        </div>
    );
};

export default NowPlayingPage;
