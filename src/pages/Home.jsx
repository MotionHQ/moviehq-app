import Banner from '../components/Banner';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer'
import MobileNavigation from '../components/MobileNavigation'

const Home = () => {
    const url = "https://api.themoviedb.org/3/trending/all/week?api_key=1b436df3ff164d38c44400425306c9f5";
    const bannerURL = "https://api.themoviedb.org/3/trending/all/week?api_key=1b436df3ff164d38c44400425306c9f5";

    return (
        <div>
            <Banner url={bannerURL}/>
                <div className='bg-gradient-to-r from-neon-red to-neon-blue relative mt-10 md:py-px lg:py-1 text-neon-yellow transition'>
                <h2 className='mono45 text-3xl my-5 text-center'>TRENDING THIS WEEK</h2>
                </div>
            <div className='container mx-auto px-3 my-10'>
                <div className='grid-container'>
                    <MovieCard url={url}/>
                </div>
            </div>
            <Footer/>
            <MobileNavigation/>
        </div>
    );
};

export default Home;
