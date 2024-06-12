import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import NowPlayingPage from '../pages/NowPlayingPage';
import TopRatedPage from '../pages/TopRatedPage';
import PopularPage from '../pages/PopularPage';
import UpcomingPage from '../pages/UpcomingPage';
import DetailsPage from '../pages/DetailsPage';
import SearchPage from '../pages/SearchPage';
import AboutPage from '../pages/AboutPage';

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "now-playing",
                element : <NowPlayingPage/>
            },
            {
                path : "top-rated",
                element : <TopRatedPage/>
            },
            {
                path : "popular",
                element : <PopularPage/>
            },
            {
                path : "upcoming",
                element : <UpcomingPage/>
            },
            {
                path : "about",
                element : <AboutPage/>
            },
            {
                path : "movie/:id",
                element : <DetailsPage/>
            },
            {
                path : "search",
                element : <SearchPage/>
            }
        ]
    }
])

export default router