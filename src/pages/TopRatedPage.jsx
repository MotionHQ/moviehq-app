import Banner from '../components/Banner';
import MovieCard from '../components/MovieCard';
import Categories from "../components/Categories";
import Footer from '../components/Footer'
import MobileNavigation from '../components/MobileNavigation'

const accessKey = import.meta.env.VITE_ACCESS_KEY;

const TopRatedPage = () => {

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${accessKey}`;
    const bannerURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${accessKey}`;
    
    return (
        <div>
            <Banner url={bannerURL}/>
                <div className='bg-gradient-to-r from-neon-red to-neon-blue relative mt-10 md:py-px lg:py-1 text-neon-yellow transition'>
                <h2 className='mono45 text-3xl my-5 text-center'>TOP RATED</h2>
                </div>
                <Categories />
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

export default TopRatedPage;
