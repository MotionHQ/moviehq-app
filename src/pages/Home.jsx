import React from 'react'
import Banner from '../components/Banner'
import { MovieCard } from '../components/MovieCard'


const Home = () => {

  return (
    
    <div>
      <Banner/>
    <div className='container mx-auto px-3 my-10'>
      <h2 className='mono45 text-xl lg:text-3xl mb-2'>Trending</h2>
      <div>

        <MovieCard />

      </div>
    </div>
    </div>
  )
}

export default Home