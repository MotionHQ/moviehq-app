import React, { useEffect, useState } from 'react';

export function MovieCard() {
    const [movieList, setMovieList] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch movie list
        const fetchMovieList = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=1b436df3ff164d38c44400425306c9f5");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setMovieList(data.results);
                console.log('Fetched data:', data); // Debugging line
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieList();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="movieList-container">
            {movieList && movieList.map((movie) => (
                <div key={movie.id} className='w-full max-w-[250px] h-80 rounded overflow-hidden'>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title || movie.name}
                        className=''
                    />
                </div>
            ))}
        </div>
    );
}
