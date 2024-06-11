import React, { useEffect, useState } from 'react';
import { IoIosHeart } from "react-icons/io";
import { Link } from 'react-router-dom';

export function MovieCard() {
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=1b436df3ff164d38c44400425306c9f5")
            .then(res => res.json())
            .then(json => setMovieList(json.results));
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            {movieList.map((movie) => (
                <Link to={"/"+movie.media_type+"/"+movie.id} key={movie.id} className='card relative w-full min-w-[250px] max-w-[250px] h-85 rounded overflow-hidden transition-all hover:scale-105'>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title || movie.name}
                        className='w-full h-full object-cover group-hover:scale-105'
                    />
                    <div className='overlay absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between shadow-2xl opacity-0 hover:opacity-100 border-neon-yellow border-2 bg-gradient-to-t from-dark-blue to-dark-blue/85'>
                        <div className='drop-shadow-xl'>
                            <h3 className='bitcount text-neon-yellow text-xl lg:text-2xl text-center py-5 px-3 mt-1 md:mt-3 xl:mt-4 min-w-[250px] max-w-[250px]'>{movie?.title || movie?.name}</h3>
                        </div>
                        <div className='max-w-[250px]'>
                            <p className='transducer line-clamp-4 mono45 px-3 my-2 text-sm'>{movie?.overview}</p>
                            <div className='flex justify-center m-4'>
                                <p className='mono45 text-neon-blue text-xl'>{movie?.release_date}</p>
                            </div>
                            <div className='flex justify-around px-3'>
                                <button className='mono45 text-sm lg:text-lg bg-neon-red rounded hover:text-neon-yellow hover:bg-gradient-to-r from-neon-red to-neon-blue shadow-md transition-all hover:scale-105 px-4 py-0.5 drop-shadow-2xl'>
                                    Read More
                                </button>
                                <IoIosHeart className='text-neon-yellow/85 text-3xl hover:text-neon-red active:text-neon-red cursor-pointer shadow-md transition-all hover:scale-105' />
                            </div>
                            <div className='flex items-center py-3 justify-between text-xs bg-dark-blue'>
                                <p className='mx-3'>Views: {movie?.popularity.toFixed(0)}+</p>
                                <span>|</span>
                                <p className='mx-3'>Rating: {movie?.vote_average.toFixed(1)}/10</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default MovieCard;
