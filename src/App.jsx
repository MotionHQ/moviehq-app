import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutPage, DetailsPage, FavouritesPage, NowPlayingPage, PopularPage, SearchPage, TopRatedPage, UpcomingPage } from './pages';
import Header from './components/Header';

function App() {
  return (
    <Router basename="/moviehq">
      <main className='App pb-14 lg:pb-0'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/details' element={<DetailsPage />} />
          <Route path='/favourites' element={<FavouritesPage />} />
          <Route path='/now-playing' element={<NowPlayingPage />} />
          <Route path='/popular' element={<PopularPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/top-rated' element={<TopRatedPage />} />
          <Route path='/upcoming' element={<UpcomingPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
