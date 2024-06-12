import TmdbLogo from '../components/TmdbLogo';
import MobileNavigation from '../components/MobileNavigation'

const AboutPage = () => {
    return (
        <div className="w-screen px-4 py-20">
            <h1 className="bitcount text-5xl mt-20 text-center text-neon-yellow">ABOUT</h1>
            <div className="mt-10 text-center">
                <p className="text-xl mx-10 pb-4">
                    Welcome to <span className='text-neon-red text-2xl ethnocentric'>MOVIEHQ</span>
                </p>
                <p className='text-xl'>Your ultimate destination for discovering, exploring, and keeping track of your favorite movies.</p>
                <div className="mt-10">
                    {/* <h2 className="mt-6 bitcount text-4xl text-neon-yellow">TMDB</h2> */}
                    <TmdbLogo />
                    <p className='mx-10'>
                        This product uses the TMDb API but is not endorsed or certified by TMDb.
                    </p>
                </div>
                <div className="mt-10">
                    <h2 className="mt-6 bitcount text-neon-yellow text-4xl">CONTACT US</h2>
                    <p className="mt-4 mx-10">
                        Have any questions, feedback, or suggestions? Feel free to reach out to us at <a href="https://motionhq.ca" className="text-blue-500" target="_blank" rel="noopener noreferrer">motionhq.ca</a>. We’d love to hear from you!
                    </p>
                </div>
            </div>
            <MobileNavigation/>
        </div>
    );
};

export default AboutPage;
