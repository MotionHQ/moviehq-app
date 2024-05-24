import React, { useEffect, useState } from 'react'

export function MovieCard() {

    const [movieList, setMovieList] = useState([])

    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=1b436df3ff164d38c44400425306c9f5")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect(()=>{
        getMovie()
    },[])
    console.log(movieList)

  return (
    <div>
        {movieList.map((movie)=>(
            <div key={movie.id} className='w-full max-w-[250px] h-80 rounded overflow-hidden '>
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                key={movie.title || movie.name}
                className=''
            />
            </div>
        ))}
    </div>
  )
}

export default MovieCard